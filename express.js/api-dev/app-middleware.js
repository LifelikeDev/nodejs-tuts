const express = require("express");
const app = express();
const portNumber = 5000;
const logger = require("../middleware-functions/logger");
const authorize = require("../middleware-functions/authorize");

// req => middleware => res

// logger middleware universally available to any other route
// app.use(logger);

// apply middleware to specific routes
// app.use("/api", logger);

// apply multiple middleware functions
app.use([authorize, logger]);

app.get("/", (req, res) => {
  res.send(`Welcome, ${req.user.name.toUpperCase()}`);
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
