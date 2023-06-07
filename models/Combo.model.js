const { Schema, model } = require("mongoose")

const comboSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required.'],
        },
        image: {
            type: String
        },
        snacks: {
            type: String,
            required: [true, 'Snacks is required.'],
        },
        drinks: {
            type: String,
            required: [true, 'Drinks is required.']
        },
        price: {
            type: Number,
            required: [true, 'Price is required.']
        }
    },
    {
        timestamps: true
    }
)

const Combo = model("Combo", comboSchema)

module.exports = Combo
