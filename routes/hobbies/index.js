const router = require("express").Router();
const { getAll, create, updateOne, getOne } = require("./controller");

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", create);
router.put("/:id", updateOne);

module.exports = router;
