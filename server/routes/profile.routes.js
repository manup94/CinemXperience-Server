const router = require("express").Router();

const {
    GetOneProfile,
    GetTickets
} = require('./../controllers/profile.controllers')

router.get("/:profile_id/getOneProfile", GetOneProfile)
router.get("//:profile_id/getTickets/:movie_id", GetTickets)


router.put("/:profile_id/edit", (req, res, next) => {

    const { profile_id } = req.params

    const { username, email, avatar } = req.body
    User
        .findByIdAndUpdate(profile_id, { username, email, avatar })
        .then(response => res.json(response))
        .catch(err => next(err))
})



module.exports = router;
