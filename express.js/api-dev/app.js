const express = require("express");
const app = express();
const port = 5000;
const { people, bios } = require("./data");

app.get("/", (req, res) => {
  // res.json(bios);

  res.send(`<h1>Home page</h1> <a href="/api/employees">employees</a>`);
});

// serve destructured content
app.get("/api/employees", (req, res) => {
  const info = bios.map((bio) => {
    const { name, title } = bio;

    return { name, title };
  });

  res.json(info);
});

// find by id
app.get(`/api/employees/:employeeId`, (req, res) => {
  const {
    params: { employeeId },
  } = req;
  const { id, name, title } = bios.find((bio) => (bio.id = employeeId));

  res.json({ id, name, title });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
