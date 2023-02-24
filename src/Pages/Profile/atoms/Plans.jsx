import "./Plans.css";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../../firebase";

export default function Plans() {
    const [ plans, setPlans ] = useState(null);

    useEffect(() => {
        async function getPlans() {
            const plans = await getDocs(collection(db, "products"));

            const reducedPlans = plans.docs.reduce((accu, doc) => {
                accu.push(doc.data());
                
                return accu;
            }, []);

            setPlans(reducedPlans);
        }
            
        getPlans();
    }, []);

    return (
        <ul className="profile__subscriptionOptions">
            { plans && 
                plans.map(plan => <SubscriptionItem key={ plan.name } type={ plan.name } details={ plan.description } />)
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