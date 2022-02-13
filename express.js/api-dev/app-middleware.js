const express = require("express");
const app = express();
const portNumber = 5000;
const logger = require("../logger-middleware");

// req => middleware => res

// logger middleware universally available to any other route
app.use(logger);

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/people", (req, res) => {
  res.send("Our Staff");
});

app.listen(portNumber, () => {
  console.log(`app is running successfully on http://localhost:${portNumber}`);
});
