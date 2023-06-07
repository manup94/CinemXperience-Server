const router = require("express").Router();
const { isAuthenticated } = require('../middlewares/verifyToken.middleware')

const {
    GetAllComments, AddComment, DeleteComment
} = require('./../controllers/comment.controllers')

router.get("/getAllComments", GetAllComments)
router.post("/addComments/:movieId", isAuthenticated, AddComment)
router.delete("/deleteComment/:comment_id", DeleteComment)

module.exports = router
