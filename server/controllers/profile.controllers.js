const User = require('../models/User.model')

const GetOneProfile = (req, res, next) => {

    const { profile_id } = req.params

    User
        .findById(profile_id)
        .then(response => res.json(response))
        .catch(err => next(err))

}

const GetTickets = (req, res, next) => {

    const { profile_id } = req.params
    const { ticket, combo } = req.body;
    const packs = { ticket, combo };

    User
        .findByIdAndUpdate(profile_id, { $push: { packs: { ticket, combo } } }, { new: true })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const EditProfile = (req, res, next) => {

    const { profile_id } = req.params
    const { username, email, avatar } = req.body
    User
        .findByIdAndUpdate(profile_id, { username, email, avatar })
        .then(response => res.json(response))
        .catch(err => next(err))

}

const GetPackDetails = (req, res, next) => {
    const { pack_id } = req.params
    User
        .findById(pack_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const AddWatchlistId = (req, res, next) => {

    const { movie_id } = req.params
    const { profile_id } = req.body

    console.log(movie_id, profile_id)

    User
        .findByIdAndUpdate(profile_id, { $push: { watchList: movie_id } }, { new: true })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const removeMovieFromWatchlist = (req, res, next) => {

    const { movie_id } = req.params
    const { profile_id } = req.body


    User
        .findByIdAndUpdate(profile_id, { $pull: { watchList: movie_id } })
        .then(response => res.json(response))
        .catch(err => next(err))
}


module.exports = {
    GetOneProfile,
    GetTickets,
    EditProfile,
    GetPackDetails,
    AddWatchlistId,
    removeMovieFromWatchlist
}

