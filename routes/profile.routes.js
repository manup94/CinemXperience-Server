const router = require("express").Router();

const {
    GetOneProfile,
    GetTickets,
    EditProfile,
    GetPackDetails,
    AddWatchlistId,
    removeMovieFromWatchlist
} = require('./../controllers/profile.controllers')


router.get("/:profile_id/getOneProfile", GetOneProfile)
router.put("/:profile_id/getTickets", GetTickets)
router.put('/:profile_id/edit', EditProfile)
router.get('/:pack_id/getPackDetails', GetPackDetails)
router.post('/:movie_id/AddWatchlistId', AddWatchlistId)
router.put('/:movie_id/removeMovieFromWatchlist', removeMovieFromWatchlist)



module.exports = router
