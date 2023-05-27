const { Schema, model } = require("mongoose")

const passSchema = new Schema(
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

const Pass = model("Pass", passSchema)

module.exports = Pass
