const router = require("express").Router();

const {
  GetPassByMovie,
  GetAllPass,
  GetOnePass,
  CreateNewPass,
  DeletePass
} = require('./../controllers/pass.controllers')

router.get("/getAllPass", GetAllPass)
router.get(`/:movieId/getPassByMovie`, GetPassByMovie)
router.get("/:pass_id/getOnePass", GetOnePass)
router.post("/createNewPass", CreateNewPass)
router.delete("/:pass_id/delete", DeletePass)

module.exports = router




