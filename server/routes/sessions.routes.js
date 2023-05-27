const router = require("express").Router();

const Session = require('../models/Session.model')

router.get('/getAllSessions', (req, res, next) => {
  Session
    .find()
    .sort({ title: 1 })
    .then(response => setTimeout(() => res.json(response), 1000))
    .catch(err => next(err))
})

router.get("/:session_id/getOneSessions", (req, res, next) => {

  const { session_id } = req.params

  Session
    .findById(session_id)
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.post("/createNewSession", (req, res, next) => {

  const { movie, hour } = req.body

  Session
    .create({ movie, hour })
    .then(response => res.json(response))
    .catch(err => next(err))
})

router.delete('/:session_id/delete', (req, res, next) => {

  const { session_id } = req.params

  Session
    .findByIdAndDelete(session_id)
    .then(response => res.json(response))
    .catch(err => next(err))
})

module.exports = router;
