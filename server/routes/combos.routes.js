const router = require("express").Router();
const fileUploader = require('../config/cloudinary.config')

const Combo = require('../models/Combo.model')


router.get('/getAllCombos', (req, res, next) => {
    Combo
        .find()
        .sort({ name: 1 })
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => next(err))
})

router.get("/:combo_id/getOneCombo", (req, res, next) => {

    const { combo_id } = req.params

    Combo
        .findById(combo_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.post("/createNewCombo", fileUploader.single('image'), (req, res, next) => {

    const { name, snacks, drinks, price } = req.body

    console.log(req.body)

    Combo
        .create({ name, snacks, drinks, price, image: req.file.path })
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.delete('/:combo_id/delete', (req, res, next) => {

    const { combo_id } = req.params

    Combo
        .findByIdAndDelete(combo_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

module.exports = router;
