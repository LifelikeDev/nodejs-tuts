const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  // res.send(
  //   `<h1 style="text-align: center;">Welcome to API Development with Express.js</h2>`
  // );

  res.json([
    { name: "Ontario", country: "USA" },
    { name: "Croydon", country: "UK" },
    { name: "Berlin", country: "Germany" },
    { name: "Shanghai", country: "China" },
    { name: "Johannesburg", country: "South Africa" },
  ]);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
