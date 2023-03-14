import "./Plans.scss";
import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db, functions } from "../../../firebase";
import { useSelector } from "react-redux";
import { httpsCallable } from "firebase/functions";

export default function Plans({ activePlan }) {
    const [ plans, setPlans ] = useState(null);

    useEffect(() => {
        async function getPlans() {
            const plans = await getDocs(collection(db, "products"));

            // map each plan into its data and price
            const reducedPlansAlt = await Promise.all(plans.docs.map(async (plan) => {
                const priceCollection = await getDocs(collection(plan.ref, "prices"));
                
                const price = priceCollection.docs[0].id;
                
                const planObj = {
                    data: plan.data(),
                    price,
                };

                return planObj;
            }));

            setPlans(reducedPlansAlt);
        }
            
        getPlans();
    }, []);

    const currentUser = useSelector(state => state.user.user);

    async function handleClick(price) {    
        if(currentUser.subscription) {
            redirectToPortal();
        }
        else {
            redirectToCheckout(price);
        }
    }

    async function redirectToPortal() {
        const createPortalLink = httpsCallable(functions, 'ext-firestore-stripe-payments-createPortalLink');
        
        const { data } = await createPortalLink({
            returnUrl: window.location.origin,
            locale: "auto",
            });
        
        window.location.assign(data.url);
    }

    async function redirectToCheckout(price) {
        const checkoutCollection = collection(db, `customers/${currentUser.uid}/checkout_sessions`);
        const docRef = await addDoc(checkoutCollection, {
            price: price,
            success_url: window.location.origin,
            cancel_url: window.location.origin,
        });

        const unsubscribe = onSnapshot(docRef, 
            (snap) => {
                const { url } = snap.data();
                
                if(url) {
                    window.location.assign(url);
                    unsubscribe();
                }
            },
            (error) => {
                alert(error);
            }
        )
    }

    return (
        <ul className="profile__subscriptionOptions">
            { plans && 
                plans.map(
                    plan => 
                        <SubscriptionItem 
                            key={ plan.data.name } 
                            type={ plan.data.name }
                            isActive={ activePlan === plan.data.role} 
                            details={ plan.data.description } 
                            price={ plan.price }
                            onClick={ handleClick }
                        />)
            }
        </ul>
    )
}

function SubscriptionItem({ type, details, isActive, price, onClick }) {
    return (  
        <li className="profile__subscriptionOption">
            <div className="content">
                <h3>{ type }</h3>
                <p>{ details }</p>
            </div>
            <button 
                onClick={ () => onClick(price) }
                className={ isActive ? "btn-disabled" : "btn-primary" }
                disabled={ isActive }>
                { isActive ? "Current Package" : "Subscribe" }
            </button>
        </li>
    );
}