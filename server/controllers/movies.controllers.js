const axios = require("axios");

const GetMovies = (req, res, next) => {

    axios.get(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${process.env.API_TOKEN}`)
        .then(response => res.json(response.data))
        .catch(err => next(err))
}

const GetBestMovies = (req, res, next) => {

<<<<<<< HEAD
    const { page } = req.query


    axios.get(`https://api.themoviedb.org/3/discover/movie?language=en-US&page=${page}&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key=${process.env.API_TOKEN}`)
=======
    axios.get(`https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key=${process.env.API_TOKEN}&page=1&limit=40`)
>>>>>>> 18ead63 (monday commit)
        .then(response => res.json(response.data))
        .catch(err => next(err))
}

const GetOneMovie = (req, res, next) => {

    const movieId = req.params.movie_id

    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=es-ES&api_key=${process.env.API_TOKEN}`)
        .then(response => res.json(response.data))
        .catch(err => next(err));
}

const GetMoviesFromTickets = (req, res, next) => {

    const { tickets } = req.body

    const moviesDetailsPromises = tickets.map(elm => axios.get(`https://api.themoviedb.org/3/movie/${elm.movieId}?language=es-ES&api_key=${process.env.API_TOKEN}`))
    return Promise.all(moviesDetailsPromises)
        .then(moviesDetails => {

            const formattedMovies = moviesDetails.map((elm, idx) => {
                return {
                    movieInfo: elm.data,
                    passInfo: tickets[idx]
                }
            })

            res.json(formattedMovies)
        })

}

module.exports = {
    GetMovies,
    GetOneMovie,
    GetBestMovies,
    GetMoviesFromTickets
}

