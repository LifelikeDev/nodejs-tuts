const http = require("http");

// const server = http.createServer((req, res) => {
//   res.write("Welcome to the first webpage written in NodeJS");
//   res.end();
// });

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage. This is where the journey starts...");
  } else if (req.url === "/about") {
    res.end("About Us. We're the best...");
  } else {
    res.end("ERROR 404... You need to be redirected");
  }
});

server.listen(2000, () => {
  console.log("app started successfully on localhost:2000");
});
