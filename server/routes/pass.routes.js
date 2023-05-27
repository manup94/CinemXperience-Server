const router = require("express").Router();

const Pass = require('../models/Pass.model')

router.get('/getAllPass', (req, res, next) => {
  Pass
    .find()
    .sort({ movie: 1 })
    .then(response => setTimeout(() => res.json(response), 1000))
    .catch(err => next(err))
})

router.get("/:pass_id/getOnePass", (req, res, next) => {

  const { pass_id } = req.params

  Pass
    .findById(pass_id)
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.post("/createNewPass", (req, res, next) => {

  const { movie, hour } = req.body

  Pass
    .create({ movie, hour })
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.delete('/:pass_id/delete', (req, res, next) => {

  const { pass_id } = req.params

  Pass
    .findByIdAndDelete(pass_id)
    .then(response => res.json(response))
    .catch(err => next(err))
})

module.exports = router;
