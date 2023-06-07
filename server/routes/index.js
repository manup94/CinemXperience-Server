const router = require('express').Router()


router.use('/auth', require('./auth.routes'))
router.use('/pass', require('./pass.routes'))
router.use('/movies', require('./movies.routes'))
router.use('/upload', require('./upload.routes'))
router.use('/combos', require('./combos.routes'))
router.use('/profile', require('./profile.routes'))
router.use('/comments', require('./comment.routes'))
router.use('/stripe', require('./stripe.routes'))




module.exports = router