const router = require("express").Router();

const {
    GetMovies,
    GetOneMovie,
    GetBestMovies,
    GetMoviesFromTickets,
    GetFilteredMovies
} = require('./../controllers/movies.controllers')

router.get("/list", GetMovies)
router.get("/movie/:movie_id", GetOneMovie)
router.get("/list/top_rated", GetBestMovies)
router.get('/list/top_rated/:genre_id', GetFilteredMovies)
router.post("/populatedMoviesFromTickets", GetMoviesFromTickets)

module.exports = router


