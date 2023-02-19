import "./Entrance.css";
import netflixLogo from "./assets/netflix-logo.png";
import { Link, useLocation } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";


export default function Entrance() {
    const { pathname } = useLocation();

    return (  
        <div className="entranceContainer">
            <div className="background">
                <div className="background__filter"></div>
            </div>
            <div className="entrance">
                <nav className="entrance__nav">
                    <Link to="/">
                        <img className="entrance__nav__logo" src={netflixLogo} alt="logo"/>
                    </Link>
                </nav>
                <main className="entrance__body">
                    { pathname === "/signUp" ? <SignUp /> : <Login /> }
                </main>
            </div>
        </div>
    );
}