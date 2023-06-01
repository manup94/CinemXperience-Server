const axios = require("axios");

const GetMovies = (req, res, next) => {

    axios.get(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${process.env.API_TOKEN}`)
        .then(response => res.json(response.data))
        .catch(err => next(err))
}

const GetOneMovie = (req, res, next) => {

    const movieId = req.params.movie_id

    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=es-ES&api_key=${process.env.API_TOKEN}`)
        .then(response => res.json(response.data))
        .catch(err => next(err));
}

module.exports = {
    GetMovies,
    GetOneMovie,
}

