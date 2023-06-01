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
    const { tiket, combo } = req.body
    const pack = { tiket, combo }

    User
        .findByIdAndUpdate(profile_id, { $push: { packs: pack } }, { new: true })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const EditProfile = (req, res, next) => {
    //const { editedProfileData } = req.body
    const { username, email, avatar } = req.body
    User
        .findByIdAndUpdate(profile_id, { username, email, avatar }/*editedProfileData*/)
        .then(response => res.json(response))
        .catch(err => next(err))

}

module.exports = {
    GetOneProfile,
    GetTickets,
    EditProfile
}

