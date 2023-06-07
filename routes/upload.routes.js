const uploaderMiddleware = require('../middlewares/uploader.middleware')
const router = require("express").Router();

const { UploadImg } = require('./../controllers/upload.controllers')

router.post("/image", uploaderMiddleware.single('image'), UploadImg)


module.exports = router





