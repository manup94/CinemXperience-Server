const router = require("express").Router();

const UploadImg = (req, res, next) => {

    if (!req.file) {
        res.status(500).json({ errorMessage: 'Error al cargar archivo' })
        return
    }
    res.json({ cloudinary_url: req.file.path })

}

module.exports = { UploadImg }