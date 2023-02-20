import "./Nav.css";
import logo from "../../assets/netflix-logo.png";
import avatar from "../../assets/netflix-avatar.png";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../../../firebase";

function Nav() {
    function handleClick() {
        signOut(auth).catch(err => console.log(err));
    }

    const [ isTransparent, setIsTransparent ] = useState(true);

    function transitionNavBar() {
        if(window.scrollY > 0) {
            setIsTransparent(false);
        }
        else {
            setIsTransparent(true);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
    }, []);

    return (  
        <nav className={"nav" + (isTransparent ? " nav--transparent" : "")}>
            <div className="nav__container">
                <img className="nav__logo" src={ logo } alt="logo" />
                <img className="nav__avatar" src={ avatar } alt="userAvatar" onClick={ handleClick } />
            </div>
        </nav>
    );
}

export default Nav;