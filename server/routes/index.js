const router = require('express').Router()

router.use('/auth', require('./auth.routes'))
router.use('/pass', require('./pass.routes'))
router.use('/combos', require('./combos.routes.js'))

module.exports = router