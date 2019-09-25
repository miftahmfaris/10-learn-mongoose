const router = require("express").Router();
const { getAll, create, getOne } = require("./controller");

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", create);

module.exports = router;
