const express = require("express");
const app = express();
const portNumber = 4000;

app.get("/", (req, res) => {
  res.status(200).send(`
    <main style="text-align: center; padding-top: 1rem;">
    <h1>Welcome to the express server</h1> 
    <h3 >Homepage</h3>
    <p><a href="/about">About page</a></p>
    </main>
    `);
});

app.get("/about", (req, res) => {
  res.status(200).send(`
    <main style="text-align: center; padding-top: 1rem;">
    <h1>Welcome to the express server</h1> 
    <h3>About page</h3>
    <p>
        <a href="/" style="margin-right: 0.5rem;">Homepage</a>
        <a href="/error">Error page</a>
    </p>
    </main>
    `);
});

app.all("*", (req, res) => {
  res.status(404).send(`
    <main style="text-align: center; padding-top: 1rem;">
    <h2>Error 404</h2>
    <h2>Resource not found</h2>
    <p>Redirect to <a href="/" style="margin-left: 0.25rem;">homepage</a></p>
    </main>
    `);
});

app.listen(portNumber, () => {
  console.log(`express server running on localhost:${portNumber}`);
});
