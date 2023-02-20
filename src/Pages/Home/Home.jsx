import "./Home.css";
import netflixLogo from "./assets/netflix-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

function Home() {
    const navigate = useNavigate();

    const emailRef = useRef(null);
    function handleSubmit(e) {
        e.preventDefault();
        
        navigate("/signUp");
    }
    
    const user = useSelector(state => state.user.user);

    useEffect(() => {
        if(user) {
            navigate("/browse");
        }
    })

    return (  
        <div className="homeContainer">
            <div className="background">
                <div className="background__filter"></div>
            </div>
            <div className="home">
                <nav className="home__nav">
                        <img className="home__nav__logo" src={netflixLogo} alt="logo"/>
                        <Link to="/login">
                            <button className="home__nav__signInButton btn">Sign in</button>
                        </Link>
                </nav>
                <main className="home__body">
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <form className="home__form" onSubmit={ handleSubmit }>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className="formControl">
                            <input ref={ emailRef } type="email" required/>
                            <button>
                                Get Started <i className="ri-arrow-right-s-line"></i>
                            </button>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    );
}

export default Home;
