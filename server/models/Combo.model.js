const { Schema, model } = require("mongoose")

const comboSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required.'],
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
            type: number,
            required: [true, 'Price is required.']
        }
    },
    {
        timestamps: true
    }
)

const Combo = model("Combo", comboSchema)

module.exports = Combo
