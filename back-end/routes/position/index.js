const { Router } = require("express");
const { listPosition } = require("../../controllers/position/index.js");

const router = Router();

router.get("/", listPosition);

module.exports = router;
