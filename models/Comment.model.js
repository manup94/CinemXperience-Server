const { Schema, model } = require("mongoose")

const commentSchema = new Schema(
    {
        movieId: {
            type: String,
        },
        message: {
            type: String,
            minlength: [5, 'El comentario necesita 5 caracteres como minimo.'],
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },

    {
        timestamps: true
    }
)

const Comment = model("Comment", commentSchema)

module.exports = Comment