const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.write(`<h1 style="text-align: center">hello friend...</h1>`);
  res.end();
  console.log("response received by user");
});

server.listen(4000, () => {
  console.log("server started successfully on http://localhost:4000");
});
