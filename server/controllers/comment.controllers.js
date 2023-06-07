const axios = require("axios");
const Comment = require('../models/Comment.model')
const User = require('../models/User.model')


const GetAllComments = (req, res, next) => {

    Comment
        .find()
        .sort({ name: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))

}

const AddComment = (req, res, next) => {

    const { movieId, message } = req.body

    Comment
        .create({ movieId, message })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const DeleteComment = (req, res, next) => {

    const { comment_id } = req.params

    Comment
        .findByIdAndDelete(comment_id)
        .then(() => {
            User.updateMany(
                { 'comment': comment_id },
                { $pull: { comment: comment_id } }
            )
                .then(() => res.sendStatus(204))
                .catch((error) => {
                    res.status(500).json({ error: 'Error al eliminar el comentario del usuario' });
                });
        })
        .catch(err => next(err))

}


module.exports = {
    GetAllComments,
    AddComment,
    DeleteComment,
}