const axios = require("axios");
const Combo = require('../models/Combo.model')
const User = require('../models/User.model')


const GetAllCombos = (req, res, next) => {

    Combo
        .find()
        .sort({ name: 1 })
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
        .then(() => res.sendStatus(201))
        .catch(err => next(err))

}

const DeleteCombo = (req, res, next) => {

    const { combo_id } = req.params

    Combo
        .findByIdAndDelete(combo_id)
        .then(() => {
            User.updateMany(
                { 'packs.combo': combo_id },
                { $pull: { packs: { combo: combo_id } } }
            )
                .then(() => res.sendStatus(204))
                .catch((error) => {
                    res.status(500).json({ error: 'Error al eliminar el ticket en los packs del usuario' });
                });
        })
        .catch(err => next(err))

}



module.exports = {
    GetAllCombos,
    GetOneCombo,
    CreateNewCombo,
    DeleteCombo
}
