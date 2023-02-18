import "./Home.css";
import netflixLogo from "./assets/netflix-logo.png";

function Home() {
    return (  
        <div className="homeContainer">
            <div className="background">
                <div className="background__filter"></div>
            </div>
            <div className="home">
                <nav className="home__nav">
                        <img className="home__nav__logo" src={netflixLogo} alt="logo"/>
                        <button className="home__nav__signInButton btn">Sign in</button>
                </nav>
                <main className="home__body">
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <form className="home__form">
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

export default Home;
