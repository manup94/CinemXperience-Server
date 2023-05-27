const { Schema, model } = require("mongoose")

const sessionSchema = new Schema(
    {
        movie: {
            type: Schema.Types.ObjectId,
            required: [true, 'Movie is required.'],
            unique: true,

        },
        hour: {
            type: String,
            required: [true, 'Hour is required.']
        }
    },
    {
        timestamps: true
    }
)

const Session = model("Session", sessionSchema)

module.exports = Session
