const Pass = require('../models/Pass.model')
const axios = require("axios");

const GetAllPass = (req, res, next) => {

    let passesInfo

    Pass
        .find()
        .sort({ name: 1 })
        // TODO: REVISAR TRANSACCIONES QUE PUEDAN SER PROYECTADAS
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

}

const GetOnePass = (req, res, next) => {

    const { pass_id } = req.params

    Pass
        .findById(pass_id)
        .then(response => res.json(response))
        .catch(err => next(err))

}

const CreateNewPass = (req, res, next) => {

    const { movieDate, movieId } = req.body

    Pass
        .create({ movieDate, movieId })
        .then(() => res.sendStatus(204))
        // .then(response => res.json(response))
        .catch(err => next(err))

}

const DeletePass = (req, res, next) => {

    const { pass_id } = req.params

    Pass
        .findByIdAndDelete(pass_id)
        .then(() => res.sendStatus(204))
        .catch(err => next(err))
}

module.exports = {
    GetAllPass,
    GetOnePass,
    CreateNewPass,
    DeletePass
}
