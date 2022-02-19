const express = require("express");
const router = express.Router();
const {
  getPeople,
  postPerson,
  putPerson,
  deletePerson,
} = require("../controllers/people");

// get
router.get("/", getPeople);

// post
router.post("/", postPerson);

// put
router.put("/:id", putPerson);

// delete
router.delete("/:id", deletePerson);

module.exports = router;
