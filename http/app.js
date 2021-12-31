const http = require("http");

// const server = http.createServer((req, res) => {
//   res.write("Welcome to the first webpage written in NodeJS");
//   res.end();
// });

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`
        <h1>Welcome to our homepage</h1> 
        <h3>This is where the journey starts...</h3>
    `);
  } else if (req.url === "/about") {
    res.end(`
        <h1>About Us</h1> 
        <p>We're the best...</p>
    `);
  } else {
    res.end(`
        <h1>ERROR 404...</h1>
        <p>We can't find that page</p>
     `);
  }
});

server.listen(2000, () => {
  console.log("app started successfully on localhost:2000");
});
