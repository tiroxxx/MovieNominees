import axios from "axios"

export default {
    searchMovie: function (movie) {
        const APIkey = "3ee73fde";
        return axios.get(`https://www.omdbapi.com/?apikey=${APIkey}&page=1&r=json&=type=movie&s=${movie}`)
    }
}