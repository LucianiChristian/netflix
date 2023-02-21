import "./SubscriptionItem.css";

function SubscriptionItem({type, details, isActive = false}) {
    return (  
        <li className="profile__subscriptionOption">
            <div className="content">
                <h3>{type}</h3>
                <p>{details}</p>
            </div>
            <button className={isActive && "active"}>
                { isActive ? "Current Package" : "Subscribe" }
            </button>
        </li>
    );
}

export default SubscriptionItem;