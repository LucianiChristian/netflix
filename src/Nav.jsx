import "./Nav.css";
import logo from "./netflix-logo.png";
import avatar from "./netflix-avatar.png";

function Nav() {
    return (  
        <div className="nav">
            <div className="nav__container">
                <img className="nav__logo" src={ logo } alt="logo" />
                <img className="nav__avatar" src={ avatar } alt="userAvatar" />
            </div>
        </div>
    );
}

export default Nav;