const router = require("express").Router();

const {
  GetAllPass,
  GetOnePass,
  CreateNewPass,
  DeletePass
} = require('./../controllers/pass.controllers')

router.get("/getAllPass", GetAllPass)
router.get("/:pass_id/getOnePass", GetOnePass)
router.post("/createNewPass", CreateNewPass)
router.delete("/:pass_id/delete", DeletePass)

module.exports = router




