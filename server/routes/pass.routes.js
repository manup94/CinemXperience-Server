const router = require("express").Router();
const axios = require("axios");
const Pass = require('../models/Pass.model')


router.get('/getAllPass', (req, res, next) => {

  let passesInfo

  Pass
    .find()
    .then(response => {

      passesInfo = response
      const moviesDetailsPromises = response.map(elm => axios.get(`https://api.themoviedb.org/3/movie/${elm.movieId}?language=es-ES&api_key=${process.env.API_TOKEN}`))
      return Promise.all(moviesDetailsPromises)

    })
    .then(moviesDetails => {

      const formattedMovies = moviesDetails.map((elm, idx) => {
        return {
          movieInfo: elm.data,
          passInfo: passesInfo[idx]
        }
      })

      res.json(formattedMovies)
    })
    .catch(err => next(err))
})



router.get("/:pass_id/getOnePass", (req, res, next) => {

  const { pass_id } = req.params

  Pass
    .findById(pass_id)
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.post("/createNewPass", (req, res, next) => {

  const { movieDate, movieId } = req.body


  Pass
    .create({ movieDate, movieId })
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.delete('/:pass_id/delete', (req, res, next) => {

  const { pass_id } = req.params

  Pass
    .findByIdAndDelete(pass_id)
    .then(response => res.json(response))
    .catch(err => next(err))
})

module.exports = router
