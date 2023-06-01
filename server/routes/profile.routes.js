const router = require("express").Router();
const User = require('../models/User.model')

router.get("/:profile_id/getOneProfile", (req, res, next) => {

    const { profile_id } = req.params

    User
        .findById(profile_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

module.exports = router;