const API_KEY = "258a741095fed7cabbaba723269635a6";
const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
    trendingTVMovies: `${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=en-US`,
    netflixOriginalTV: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
    topRatedMovies: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    scienceFictionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fantasyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=14`,
    mysteryMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    adventureMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=12`,
    documentaryMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;