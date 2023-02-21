import "./Profile.css";
import avatarImage from "./assets/netflix-avatar.png";
import SubscriptionItem from "./atoms/SubscriptionItem";
import Nav from "./atoms/Nav";
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
                    <p className="profile__email">email_goesHere@placeholder.com</p>
                    <h2 className="profile__plan">Plans (Current Plan: ??)</h2>
                    <p className="profile__renewalDate">Renewal date: 00/00/0000</p>
                    <ul className="profile__subscriptionOptions">
                        <SubscriptionItem type="Netflix Standard" details="1080p" />
                        <SubscriptionItem type="Netflix Basic" details="480p" />
                        <SubscriptionItem type="Netflix Premium" details="4k+HDR" isActive={true} />
                    </ul>
                    <button className="profile__signOut" onClick={ handleClick }>Sign out</button>
                </section>
            </main>
        </div>
    );
}

export default Profile;