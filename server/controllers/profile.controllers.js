const User = require('../models/User.model')

const GetOneProfile = (req, res, next) => {

    const { profile_id } = req.params

    User
        .findById(profile_id)
        .populate('packs.ticket')
        .populate('packs.combo')
        .then(response => res.json(response))
        .catch(err => next(err))

}

const GetTickets = (req, res, next) => {

    const { profile_id } = req.params
    const { ticket, combo } = req.body;
    const packs = { ticket, combo };
<<<<<<< HEAD

    if (ticket === undefined || combo === undefined) {
        res.status(400).json({ errorMessages: ["Provide a ticket and combo."] });
        return;
    }
=======
>>>>>>> 2e602f1 (done)

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

<<<<<<< HEAD
}

<<<<<<< HEAD
const GetPackDetails = (req, res, next) => {
    const { pack_id } = req.params
    User
        .findById(pack_id)
        .populate('packs.ticket')
        .populate('packs.combo')
        .then(response => res.json(response))
        .catch(err => next(err))
}

const AddWatchlistId = (req, res, next) => {

    const { movie_id } = req.params
    const { profile_id } = req.body

    User
        .isDuplicateMovie(profile_id, movie_id)
        .then(exists => {
            if (!exists) {
                User
                    .findByIdAndUpdate(profile_id, { $push: { watchList: movie_id } }, { new: true })
                    .then(response => res.json(response))
            } else {
                res.json(null)
            }
        })
        .catch(err => next(err))

}

const removeMovieFromWatchlist = (req, res, next) => {

    const { movie_id } = req.params
    const { profile_id } = req.body


    User
        .findByIdAndUpdate(profile_id, { $pull: { watchList: movie_id } })
=======
}

const GetPackDetails = (req, res, next) => {
    const { pack_id } = req.params
    User
        .findById(pack_id)
>>>>>>> 2e602f1 (done)
        .then(response => res.json(response))
        .catch(err => next(err))
}
=======
// const GetPackDetails = (req, res, next) => {
//     const { pack_id } = req.params
//     User
//         .findById(pack_id)
//         .populate('packs.ticket')
//         // .populate('packs.combo')
//         .then(response => res.json(response))
//         .catch(err => next(err))
// }
>>>>>>> 18ead63 (monday commit)


<<<<<<< HEAD
=======

>>>>>>> 2e602f1 (done)
module.exports = {
    GetOneProfile,
    GetTickets,
    EditProfile,
<<<<<<< HEAD
<<<<<<< HEAD
    GetPackDetails,
    AddWatchlistId,
    removeMovieFromWatchlist

    }

