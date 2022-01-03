const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  res.end(`
        <h1>Http Requests with Event Emitters</h1>
        <h4>This is some response processed with a server using event emitters in node
        </h4>
        <blockquote>${res.statusCode}</blockquote>
        <blockquote>${res.statusMessage}</blockquote>
        `);
});

server.listen(2222, () => {
  console.log("server started successfully on http://localhost:2222");
});
