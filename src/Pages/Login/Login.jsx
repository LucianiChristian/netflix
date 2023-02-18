import "./Login.css";
import netflixLogo from "./assets/netflix-logo.png";
import { Link } from "react-router-dom";


function Login() {
    return (  
        <div className="loginContainer">
            <div className="background">
                <div className="background__filter"></div>
            </div>
            <div className="login">
                <nav className="login__nav">
                    <Link to="/">
                        <img className="login__nav__logo" src={netflixLogo} alt="logo"/>
                    </Link>
                </nav>
                <main className="login__body">
                    <h2>Sign In</h2>
                    <form className="login__form">
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <button className="btn">Sign In</button>
                    </form>
                </main>
            </div>
        </div>
    );
}

export default Login;