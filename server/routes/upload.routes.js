const router = require("express").Router();
const uploaderMiddleware = require('../middlewares/uploader.middleware')

router.post('/image', uploaderMiddleware.single('image'), (req, res, next) => {

    if (!req.file) {
        res.status(500).json({ errorMessage: 'Error al cargar archivo' })
        return
    }
    res.json({ cloudinary_url: req.file.path })
})




module.exports = router;