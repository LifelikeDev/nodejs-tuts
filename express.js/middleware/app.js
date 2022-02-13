const express = require("express");
const app = express();
const portNumber = 5000;
const logger = require("./logger");
const authorize = require("./authorize");
const morgan = require("morgan");

// req => middleware => res

// logger middleware universally available to any other route
// app.use(logger);

// apply middleware to specific routes
// app.use("/api", logger);

// apply multiple middleware functions
// app.use([authorize, logger]);

// using a third-party middleware logger
app.use(morgan("dev"));

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
