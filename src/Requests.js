// We would store API keys here {process.en.API_KEY}
const API_KEY = "3065b43c6919420b125b0f001312eaa6";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOrignals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movies/top_rated?api_key${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key${API_KEY}&with_genres=99`,
    
};

    export default requests;