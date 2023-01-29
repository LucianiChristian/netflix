import "./Nav.css";
import logo from "./netflix-logo.png";
import avatar from "./netflix-avatar.png";
import { useEffect, useState } from "react";

function Nav() {
    const [ isTransparent, setIsTransparent ] = useState(true);

    function transitionNavBar() {
        if(window.scrollY > 0) {
            setIsTransparent(true);
        }
        else {
            setIsTransparent(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
    }, []);

    return (  
        <div className={"nav" + (isTransparent ? " nav--transparent" : "")}>
            <div className="nav__container">
                <img className="nav__logo" src={ logo } alt="logo" />
                <img className="nav__avatar" src={ avatar } alt="userAvatar" />
            </div>
        </div>
    );
}

export default Nav;