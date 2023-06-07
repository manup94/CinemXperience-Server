const { findById } = require('../models/Combo.model');
const Pass = require('../models/Pass.model')
const User = require('../models/User.model')
const axios = require("axios");

const GetAllPass = (req, res, next) => {

    let passesInfo

    Pass
        .find()
        .sort({ name: 1 })
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
        .catch(err => next(err))

}

const GetPassByMovie = (req, res, next) => {
    const { movieId } = req.params

    Pass
        .find({ movieId })
        .then((response) => {
            res.json(response)
        })
        .catch((err) => console.log(err))

}


const DeletePass = (req, res, next) => {
    const { pass_id } = req.params;

    Pass.findByIdAndDelete(pass_id)
        .then(() => {
            // Buscar y eliminar el ticket con el mismo objectID en los packs del usuario
            User.updateMany(
                { 'packs.ticket': pass_id },
                { $pull: { packs: { ticket: pass_id } } }
            )
                .then(() => res.sendStatus(204))
                .catch((error) => {
                    res.status(500).json({ error: 'Error al eliminar el ticket en los packs del usuario' });
                });
        })
        .catch((error) => {
            res.status(500).json({ error: 'Error al eliminar el pass' });
        });
};


module.exports = {
    GetPassByMovie,
    GetAllPass,
    GetOnePass,
    CreateNewPass,
    DeletePass
}
