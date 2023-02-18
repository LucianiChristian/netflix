import "./Login.css";
import netflixLogo from "./assets/netflix-logo.png";

function Login() {
    return (  
        <div className="loginContainer">
            <div className="background">
                <div className="background__filter"></div>
            </div>
            <div className="login">
                <nav className="login__nav">
                        <img className="login__nav__logo" src={netflixLogo} alt="logo"/>
                        <button className="login__nav__signInButton btn">Sign in</button>
                </nav>
                <main className="login__body">
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <form className="login__form">
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className="formControl">
                            <input type="email" />
                            <button>
                                Get Started <i class="ri-arrow-right-s-line"></i>
                            </button>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    );
}

export default Login;
