const { Schema, model } = require("mongoose")

const commentSchema = new Schema(
    {
        movieId: {
            type: String,
        },
        message: {
            type: String,

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