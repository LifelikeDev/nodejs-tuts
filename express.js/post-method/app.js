const express = require("express");
const app = express();
const portNumber = 5000;
const { people } = require("../../data");
const path = require("path");

app.use(express.static(path.join(__dirname, "methods-public")));

// parse form data
app.use(express.urlencoded({ extended: false }));

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
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

app.listen(portNumber, () => {
  console.log(
    `Server is running successfully on http://localhost:${portNumber}`
  );
});
