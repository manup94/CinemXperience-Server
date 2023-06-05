const router = require("express").Router();

const {
    GetOneProfile,
    GetTickets,
    EditProfile,
} = require('./../controllers/profile.controllers')


router.get("/:profile_id/getOneProfile", GetOneProfile)
router.put("/:profile_id/getTickets", GetTickets)
router.put('/:profile_id/edit', EditProfile)




module.exports = router
