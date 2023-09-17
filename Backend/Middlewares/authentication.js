const authentication = (req, res, next) => {
  const { Authorization } = req.headers;
  console.log(req.headers);
  if (Authorization) {
    return res
      .status(400)
      .json({ msg: "You are not authorized user Please login First" });
  }
  next();
};

module.exports = { authentication };
