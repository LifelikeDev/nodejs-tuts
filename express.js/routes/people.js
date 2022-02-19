const express = require("express");
const router = express.Router();
const {
  getPeople,
  addPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

// get
router.get("/", getPeople);

// post
router.post("/", addPerson);

// put
router.put("/:id", updatePerson);

// delete
router.delete("/:id", deletePerson);

module.exports = router;
