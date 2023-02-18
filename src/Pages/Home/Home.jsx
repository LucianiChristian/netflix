import "./Home.css";
import Nav from "./Atoms/Nav/Nav";
import Banner from "./Atoms/Banner/Banner";
import Row from "./Atoms/Row/Row";
import requests from "../../API/requests";

function Home() {
    const urls = Object.values(requests);

    return (
        <div className="home">
            <Nav />
            <Banner />
            { urls.map(url => <Row key={ url } url={ url } />) }
        </div>   
    )
}

export default Home;