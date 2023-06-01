const router = require("express").Router();

const {
    GetOneProfile,
    GetTickets
} = require('./../controllers/profile.controllers')

router.get("/:profile_id/getOneProfile", GetOneProfile)
router.get("//:profile_id/getTickets/:movie_id", GetTickets)


module.exports = router
