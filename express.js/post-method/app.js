const express = require("express");
const app = express();
const portNumber = 5000;
const path = require("path");

app.use(express.static(path.join(__dirname, "methods-public")));

app.get("/another", (req, res) => {
  res.send(`Hello friend... Welcome!!!`);
});

app.listen(portNumber, () => {
  console.log(
    `Server is running successfully on http://localhost:${portNumber}`
  );
});
