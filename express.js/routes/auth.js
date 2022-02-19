const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(401).json({
      error: `${res.statusCode}`,
      message: "Please enter a correct name",
    });
  }

  res.status(200).send(`<h2>Welcome, ${name}</h2>`);
});

module.exports = router;
