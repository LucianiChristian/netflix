import "./Banner.css";
import "../../../../utils.css";
import { useEffect, useState } from "react";
import requests from "../../../../API/requests";

function Banner() {
    const [ bannerMovie, setBannerMovie ] = useState({});

    useEffect(() => {
        const move = fetch(requests.scienceFictionMovies)
            .then(response => response.json())
            .then(data => console.log(data));
    }, []);

    function clampDescription(description, length) {
        return description.length > length ?
            description.slice(0, length - 3) + "..." :
            description;
    }

    const testDescription = "An adaptation of a 1994 manga by Naoki Urasawa, Monster is a horror and psychological thriller anime that toys with the difficult themes of what it means to be human, if good and evil are within people from birth or if they are fostered over time, and how every action has a consequence that must be faced.";

    return (  
        <header className="banner">
            <div className="banner__contents">
                <h1 className="banner__title">Monster</h1>
                <div className="banner__buttons">
                    <button className="btn color-primary banner__button">
                        <i className="ri-play-fill icon-small"></i>
                        Play
                    </button>
                    <button className="btn color-secondary banner__button">
                        <i className="ri-add-circle-line icon-small"></i>
                        My List
                    </button>
                </div>
                <p className="banner__description">
                    { clampDescription(testDescription, 150) }
                </p>
            </div>
        </header>
    );
}

export default Banner;