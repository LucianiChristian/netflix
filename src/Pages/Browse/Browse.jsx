import "./Browse.css";
import Nav from "./Atoms/Nav/Nav";
import Banner from "./Atoms/Banner/Banner";
import Row from "./Atoms/Row/Row";
import requests from "../../API/requests";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Browse() {
    const urls = Object.values(requests);

    const user = useSelector(state => state.user.user);

    const navigate = useNavigate();
    useEffect(() => {
        if(!user) navigate("/");
    })

    return (
        <div className="browse">
            <Nav />
            <Banner />
            { urls.map(url => <Row key={ url } url={ url } />) }
        </div>   
    )
}

export default Browse;