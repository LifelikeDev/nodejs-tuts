const express = require("express");
const logPersonIn = require("../controllers/auth");
const router = express.Router();

// log person in
router.post("/", logPersonIn);

module.exports = router;
