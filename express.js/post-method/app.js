const express = require("express");
const app = express();
const portNumber = 5000;
const { people } = require("../../data");
const path = require("path");

app.use(express.static(path.join(__dirname, "methods-public")));

// parse form data
app.use(express.urlencoded({ extended: false }));

// parse json
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "Please enter a correct name..." });
  }

  return res.status(201).json({ success: true, person: name });
});

app.get("/another", (req, res) => {
  res.send(`Hello friend... Welcome!!!`);
});

app.post("/login", (req, res) => {
  const { name } = req.body;

  if (!name) {
    // throw new Error("Please enter an actual name").message;
    res.status(401).json({
      error: `${res.statusCode}`,
      message: "Please enter a correct name",
    });
  }

  res.status(200).send(`<h2>Welcome, ${name}</h2>`);
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((p) => p.id === Number(id));

  if (!person) {
    res
      .status(404)
      .json({ success: false, message: `Person with ID ${id} not found...` });
  }

  const updatedPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  res.status(200).json({ success: true, data: person });
});

app.listen(portNumber, () => {
  console.log(
    `Server is running successfully on http://localhost:${portNumber}`
  );
});
