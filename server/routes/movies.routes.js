const router = require("express").Router();

const {
    GetMovies,
    GetOneMovie
} = require('./../controllers/movies.controllers')

router.get("/list", GetMovies)
router.get("/movie/:movie_id", GetOneMovie)


module.exports = router

// TODO: DESACOPLAR SERVICIOS



