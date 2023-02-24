import "./Plans.css";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../../firebase";

export default function Plans() {
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

    console.log(plans)

    return (
        <ul className="profile__subscriptionOptions">
            { plans && 
                plans.map(plan => <SubscriptionItem key={ plan.data.name } type={ plan.data.name } details={ plan.data.description } price={ plan.price }/>)
            }
        </ul>
    )
}

function SubscriptionItem({type, details, isActive = false}) {
    return (  
        <li className="profile__subscriptionOption">
            <div className="content">
                <h3>{type}</h3>
                <p>{details}</p>
            </div>
            <button className={isActive ? "active" : ""}>
                { isActive ? "Current Package" : "Subscribe" }
            </button>
        </li>
    );
}