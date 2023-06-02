const router = require("express").Router();

const {
    GetMovies,
    GetOneMovie,
    GetBestMovies
} = require('./../controllers/movies.controllers')

router.get("/list", GetMovies)
router.get("/movie/:movie_id", GetOneMovie)
router.get("/list/top_rated", GetBestMovies)


module.exports = router


