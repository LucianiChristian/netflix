import "./Profile.scss";
import avatarImage from "./assets/netflix-avatar.png";
import Nav from "./atoms/Nav";
import Plans from "./atoms/Plans";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Profile() {
    function handleClick() {
        signOut(auth).catch(err => console.log(err));
    }

    const user = useSelector(state => state.user.user);
    const email = user?.email;
    const formattedPlan = user?.subscription ? 
        user?.subscription.plan[0].toUpperCase() + user?.subscription.plan.slice(1) :
        "Unsubscribed";

    const navigate = useNavigate();
    useEffect(() => {
        if(!user) navigate("/");
    })
    
    return (  
        <div className="profile">
            <Nav />
            <main className="profile__body">
                <h1>Edit Profile</h1>
                <aside className="profile__avatarContainer">
                    <img src={avatarImage} alt="" />
                </aside>
                <section className="profile__content">
                    <p className="profile__email">{ email }</p>
                    <h2 className="profile__plan">Plans (Current Plan: { formattedPlan })</h2>
                    <p className="profile__renewalDate">Renewal date: { user?.subscription?.endDate }</p>
                    <Plans activePlan={ user?.subscription?.plan } />
                    <button className="btn btn-primary" onClick={ handleClick }>Sign out</button>
                </section>
            </main>
        </div>
    );
}

export default Profile;