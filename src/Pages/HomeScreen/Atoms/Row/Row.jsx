import { useEffect, useState } from "react";
import "./Row.css";

function Row({ url }) {
    const [ items, setItems ] = useState();
    
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setItems(data.results.filter(movie => movie.backdrop_path).slice(0, 5)));
    }, [])

    const images = items?.map(item => <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}/>);

    return ( 
        <div className="row">
            { images }
        </div>
    );
}

export default Row;