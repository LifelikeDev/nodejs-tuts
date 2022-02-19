const express = require("express");
const app = express();
const portNumber = 5000;
const path = require("path");
const peopleRoute = require("../routes/people");
const loginRoute = require("../routes/auth");

app.use(express.static(path.join(__dirname, "methods-public")));

// parse form data
app.use(express.urlencoded({ extended: false }));

// parse json
app.use(express.json());

// use route
app.use("/api/people", peopleRoute);
app.use("/login", loginRoute);

// server listen
app.listen(portNumber, () => {
  console.log(
    `Server is running successfully on http://localhost:${portNumber}`
  );
});
