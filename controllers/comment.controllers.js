const axios = require("axios");
const Comment = require('../models/Comment.model')
const User = require('../models/User.model')


const GetAllComments = (req, res, next) => {

    Comment
        .find()
        .populate('owner')
        .then(response => res.json(response))
        .catch(err => next(err))
}

const AddComment = (req, res, next) => {

    const { _id } = req.payload
    const { comment } = req.body
    const { movieId } = req.params

    Comment
        .create({ movieId, message: comment, owner: _id })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const DeleteComment = (req, res, next) => {

    const { comment_id } = req.params

    Comment
        .findByIdAndDelete(comment_id)
        .then(() => res.sendStatus(204))
        .catch(() => {
            res.status(500).json({ error: 'Error al eliminar el comentario' });
        });



}


module.exports = {
    GetAllComments,
    AddComment,
    DeleteComment,
}