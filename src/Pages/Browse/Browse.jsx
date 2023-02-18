import "./Browse.css";
import Nav from "./Atoms/Nav/Nav";
import Banner from "./Atoms/Banner/Banner";
import Row from "./Atoms/Row/Row";
import requests from "../../API/requests";

function Browse() {
    const urls = Object.values(requests);

    return (
        <div className="browse">
            <Nav />
            <Banner />
            { urls.map(url => <Row key={ url } url={ url } />) }
        </div>   
    )
}

export default Browse;