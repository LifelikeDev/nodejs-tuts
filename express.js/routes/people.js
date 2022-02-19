const express = require("express");
const router = express.Router();
const {
  getPeople,
  addPerson,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

// // get
// router.get("/", getPeople);

// // post
// router.post("/", addPerson);

// // put
// router.put("/:id", updatePerson);

// // delete
// router.delete("/:id", deletePerson);

router.route("/").get(getPeople).post(addPerson);
router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
