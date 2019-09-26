const router = require("express").Router();
const { getAll, create, getOne } = require("./controller");
const { upload } = require("../../config");

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", upload.any(), create);

module.exports = router;
