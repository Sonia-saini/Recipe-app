const authentication = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res
      .status(400)
      .json({ msg: "You are not authorized user Please login First" });
  }
  next();
};

module.exports = { authentication };
