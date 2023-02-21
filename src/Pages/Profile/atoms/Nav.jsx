import "./Nav.css";
import logo from "../assets/netflix-logo.png";
import avatar from "../assets/netflix-avatar.png";
import { useNavigate } from "react-router-dom";


function Nav() {
    const navigate = useNavigate();

    return (  
        <nav className="nav">
            <div className="nav__container">
                <img className="nav__logo" src={ logo } alt="logo" onClick={ () => navigate("/browse") } />
                <img className="nav__avatar" src={ avatar } alt="userAvatar" onClick={ () => navigate("/profile") } />
            </div>
        </nav>
    );
}

export default Nav;