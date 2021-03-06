const http = require("http");
const { readFileSync } = require("fs");

const homepage = readFileSync("../nodejs-tuts/express.js/index.html");
const homepageStyles = readFileSync("../nodejs-tuts/express.js/styles.css");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homepage);
    res.end();
  } else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homepageStyles);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h1 style="text-align: center">About Us...</h1>`);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write(`
        <h3 style="text-align: center">
        Resource Not Found <br>
        <a href="/">Back home</a>
        </h3>
        
    `);
    res.end();
  }

  console.log("response received by user");
});

server.listen(4000, () => {
  console.log("server started successfully on http://localhost:4000");
});
