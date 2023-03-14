import "./Banner.css";
import "../../../../styles/utils.scss"
import { useEffect, useRef, useState } from "react";
import requests from "../../../../API/requests";

function Banner() {
    const [ bannerMovie, setBannerMovie ] = useState();

    function fetchBannerMovie() {
        fetch(requests.trendingTVMovies)
            .then(response => response.json())
            .then(data => setBannerMovie(data.results[Math.floor(Math.random() * data.results.length)]));
    }

    const intervalRef = useRef(null);

    useEffect(() => {
        fetchBannerMovie();

        intervalRef.current = setInterval(fetchBannerMovie, 10000);

        return () => clearInterval(intervalRef.current);
    }, []);

    function clampDescription(description, length) {
        return description?.length > length ?
            description.slice(0, length - 3) + "..." :
            description;
    }

    return (  
        <header className="banner" style={ bannerMovie ? {backgroundImage: `url("https://image.tmdb.org/t/p/original${bannerMovie.backdrop_path}")`} : null }>
            <div className="banner__contents">
                <h1 className="banner__title">{bannerMovie?.title || bannerMovie?.name}</h1>
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
                    { clampDescription(bannerMovie?.overview, 150) }
                </p>
            </div>
        </header>
    );
}

export default Banner;