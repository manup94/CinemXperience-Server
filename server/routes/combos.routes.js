const router = require("express").Router();

const {
    GetAllCombos,
    GetOneCombo,
    CreateNewCombo,
    DeleteCombo
} = require('./../controllers/combos.controllers')

router.get("/getAllCombos", GetAllCombos)
router.get("/:combo_id/getOneCombo", GetOneCombo)
router.post("/createNewCombo", CreateNewCombo)
router.delete("/:combo_id/delete", DeleteCombo)

module.exports = router



