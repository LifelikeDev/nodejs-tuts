const express = require("express");
const router = express.Router();
let { people } = require("../../data");

// get
router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// post
router.post("/", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "Please enter a correct name..." });
  }

  return res.status(201).json({ success: true, person: name });
});

// put
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((p) => p.id === Number(id));

  if (!person) {
    res
      .status(404)
      .json({ success: false, message: `Person with ID ${id} not found...` });
  }

  people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  res.status(200).json({ success: true, data: person });
});

// delete
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    res
      .status(401)
      .json({ success: false, message: `Person with ID ${id} not found` });
  }

  const newPeople = people.filter((person) => person.id !== Number(id));

  res.status(200).json({ success: true, data: newPeople });
});

module.exports = router;
