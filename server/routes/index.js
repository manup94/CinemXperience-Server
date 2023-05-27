const router = require('express').Router()

router.use('/sessions', require('./sessions.routes'))

module.exports = router