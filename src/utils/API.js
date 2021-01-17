import axios from "axios"

export default {
    searchMovie: function (movie) {
        const APIkey = "3ee73fde";
        return axios.get(`http://www.omdbapi.com/?apikey=${APIkey}&page=1&r=json&=type=movie&s=${movie}`)
    }
}