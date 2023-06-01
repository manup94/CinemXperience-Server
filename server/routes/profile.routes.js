const router = require("express").Router();
const User = require('../models/User.model')

router.get("/:profile_id/getOneProfile", (req, res, next) => {

    const { profile_id } = req.params

    User
        .findById(profile_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.put("/:profile_id/edit", (req, res, next) => {

    const { profile_id } = req.params

    //const { editedProfileData } = req.body
    const { username, email, avatar } = req.body
    User
        .findByIdAndUpdate(profile_id, { username, email, avatar }/*editedProfileData*/)
        .then(response => res.json(response))
        .catch(err => next(err))
})



module.exports = router;