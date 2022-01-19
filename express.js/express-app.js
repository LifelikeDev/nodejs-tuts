const express = require("express");
const app = express();
const portNumber = 4000;

app.get("/", (req, res) => {
  res.send(`
    <main style="text-align: center; padding-top: 1rem;">
    <h1>Welcome to the express server</h1> 
    <h3 >Homepage</h3>
    <p><a href="/about">About page</a></p>
    </main>
    `);
});

app.get("/about", (req, res) => {
  res.send(`
    <main style="text-align: center; padding-top: 1rem;">
    <h1>Welcome to the express server</h1> 
    <h3 >About page</h3>
    <p><a href="/">Homepage</a></p>
    </main>
    `);
});

app.all("*", (req, res) => {
  res.send(`
    <main style="text-align: center; padding-top: 1rem;">
    <h2>Error 404</h2>
    <h2>Wrong destination</h2>
    <p>Redirect to <a href="/">homepage</a></p>
    </main>
    `);
});

app.listen(portNumber, () => {
  console.log(`express server running on localhost:${portNumber}`);
});
