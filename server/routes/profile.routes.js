const router = require("express").Router();

const {
    GetOneProfile,
    GetTickets,
    EditProfile
} = require('./../controllers/profile.controllers')


router.get("/:profile_id/getOneProfile", GetOneProfile)
router.get("/:profile_id/getTickets/:movie_id", GetTickets)
router.put("/:profile_id/edit", EditProfile)


module.exports = router;

