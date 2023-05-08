const { Router } = require("express");
const { listFreelancer } = require("../../controllers/freelancer/index.js");

const router = Router();

router.get("/", listFreelancer);

module.exports = router;
