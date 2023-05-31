const { Schema, model } = require("mongoose")

const passSchema = new Schema(
    {
        movieId: {
            type: Schema.Types.Number,
            required: [true, 'Movie is required.'],
            validate: {
                validator: value => value != 0,
                message: 'Please select a movie'
            }
        },
        movieDate: {
            type: Date,
            required: [true, 'Date is required.']
        }
    },
    {
        timestamps: true
    }
)

const Pass = model("Pass", passSchema)

module.exports = Pass
