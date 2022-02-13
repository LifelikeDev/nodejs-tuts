let userId = 1;

const authorize = (req, res, next) => {
  const { user } = req.query;

  if (user) {
    req.user = { id: userId, name: user };
    userId++;
    next();
    console.log(req.user);
    console.log("authorized");
  } else {
    res
      .status(401)
      .send("Bad Gateway! You are not authorized to access this content");
  }
};

module.exports = authorize;
