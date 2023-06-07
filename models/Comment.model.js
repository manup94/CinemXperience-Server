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
    },

    {
        timestamps: true
    }
)

const Comment = model("Combo", commentSchema)

module.exports = Comment