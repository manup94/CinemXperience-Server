const router = require("express").Router();
const axios = require("axios");
const Pass = require('../models/Pass.model')

router.get('/getAllPass', (req, res, next) => {
  Pass
    .find() //busca todos los pases
    .then(async (response) => { //response es todos los pases
      try {
        const moviesIds = [...new Set(response.map((sesion) => sesion.movieId))] // sacamos el array de las moviesID sin repetirse
        const promises = moviesIds.map((movieId) => { // creamos un array de promesas por cada pelicula
          return axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=es-ES&api_key=${process.env.API_TOKEN}`).then(r => r.data) //error circular

        })
        const movies = await Promise.all(promises) // resolvemos cada promesa con un promise all
        const passes = response.map((pass) => { // creamos un array de pase y buscamos la info de la peliucla en el array de las promesas resultas
          const movie = movies.find(m => m.id === pass.movieId)

          console.log(pass);
          return { movie, movieDate: pass.movieDate } //creamos un objeto por cada pase con los valores de movieinfo y moviedate
        })
        res.json(passes) //devolvemos el array de passes con la info de la pelicula d cada pase
      }
      catch (error) { console.log(error); }


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

module.exports = router;
