const axios = require("axios");
const Combo = require('../models/Combo.model')

const GetAllCombos = (req, res, next) => {

    Combo
        .find()
        .sort({ name: 1 })
        // TODO: REVISAR TRANSACCIONES QUE PUEDAN SER PROYECTADAS
        // .select({name: 1, etc...})
        .then(response => res.json(response))
        .catch(err => next(err))

}

const GetOneCombo = (req, res, next) => {

    const { combo_id } = req.params

    Combo
        .findById(combo_id)
        .then(response => res.json(response))
        .catch(err => next(err))

}

const CreateNewCombo = (req, res, next) => {

    const { name, snacks, drinks, price, image } = req.body

    Combo
        .create({ name, snacks, drinks, price, image })
        .then(response => res.json(response))
        .catch(err => next(err))

}

const DeleteCombo = (req, res, next) => {

    const { combo_id } = req.params

    Combo
        .findByIdAndDelete(combo_id)
        .then(response => res.json(response))
        .catch(err => next(err))

}

module.exports = {
    GetAllCombos,
    GetOneCombo,
    CreateNewCombo,
    DeleteCombo
}
