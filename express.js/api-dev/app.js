const express = require("express");
const app = express();
const port = 5000;
const { people, bios } = require("./data");

app.get("/", (req, res) => {
  // res.json(bios);

  res.send(`
    <h1>Home page</h1>
    <a href="/api/employees">employees</a>
  `);
});

// serve destructured content
app.get("/api/employees", (req, res) => {
  const info = bios.map((bio) => {
    const { name, title } = bio;

    return { name, title };
  });

  res.json(info);
});

// path variables
app.get(`/api/employees/:employeeId`, (req, res) => {
  const {
    params: { employeeId },
  } = req;
  const singleEmployee = bios.find((bio) => bio.id === Number(employeeId));

  if (employeeId > bios.length) {
    return res.status(404).send(`<h3>Sorry. Employee does not exist</h3>`);
  }

  return res.json(singleEmployee);
});

// query params
app.get("/api/v1/query", (req, res) => {
  const { search } = req.query;

  let searchedBio = [...bios];

  if (search) {
    searchedBio = searchedBio.filter((bio) => bio.name.match(search));
  }

  if (searchedBio.length < 1) {
    // res.status(200).send(`No employee matched your search...`);

    return res.status(200).json({
      success: true,
      data: [],
      description: "No match for search results",
    });
  }

  return res.status(200).json(searchedBio);
});

// serve app
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
