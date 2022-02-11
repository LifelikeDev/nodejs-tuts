const express = require("express");
const app = express();
const port = 5000;
const { people, bios } = require("./data");

app.get("/", (req, res) => {
  // res.json([
  //   { name: "Ontario", country: "USA" },
  //   { name: "Croydon", country: "UK" },
  //   { name: "Berlin", country: "Germany" },
  //   { name: "Shanghai", country: "China" },
  //   { name: "Johannesburg", country: "South Africa" },
  // ]);

  // res.json(bios);

  res.send(`<h1>Home page</h1> <a href="/api/employees">employees</a>`);
});

app.get("/api/employees", (req, res) => {
  const info = bios.map((bio) => {
    const { name, title } = bio;

    return { name, title };
  });

  res.json(info);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
