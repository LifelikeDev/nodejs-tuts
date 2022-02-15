const express = require("express");
const app = express();
const portNumber = 5000;
const path = require("path");

app.use(express.static(path.join(__dirname, "methods-public")));

// parse form data
app.use(express.urlencoded({ extended: false }));

app.get("/another", (req, res) => {
  res.send(`Hello friend... Welcome!!!`);
});

app.post("/login", (req, res) => {
  const { name } = req.body;

  res.send(`<h2>Welcome, ${name}</h2>`);
});

app.listen(portNumber, () => {
  console.log(
    `Server is running successfully on http://localhost:${portNumber}`
  );
});
