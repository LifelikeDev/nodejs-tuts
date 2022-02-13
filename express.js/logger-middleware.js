// middleware function

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

module.exports = logger;
