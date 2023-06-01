const router = require("express").Router();

const {
    GetOneProfile,
    GetTickets
} = require('./../controllers/profile.controllers')

router.get("/:profile_id/getOneProfile", GetOneProfile)
router.get("//:profile_id/getTickets/:movie_id", GetTickets)


<<<<<<< HEAD
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
=======
module.exports = router
>>>>>>> 4d76763 (done)
