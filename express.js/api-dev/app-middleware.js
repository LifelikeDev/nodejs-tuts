const express = require("express");
const app = express();
const portNumber = 5000;

// req => middleware => res

const logger = (req, res, next) => {
  const props = {
    method: req.method,
    url: req.url,
    time: new Date().getFullYear(),
  };

  console.log(props.method, props.url, props.time);
  // sending back your own response
  // res.send(`middleware at work`);

  // passing it on
  next();
};

app.get("/", logger, (req, res) => {
  res.send("Home page");
});

app.get("/about", logger, (req, res) => {
  res.send("About");
});

app.listen(portNumber, () => {
  console.log(`app is running successfully on http://localhost:${portNumber}`);
});
