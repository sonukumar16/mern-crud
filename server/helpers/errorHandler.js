module.exports = (err, req, res, next) => {
  console.log("Error handling function is called::::", err);
  const { message, code, name } = err;
  const status = false,
    data = null;
  /* if (typeof err === "string") {
    // custom application error
    return res.status(400).json({
      message: err
    });
  } */

  if (name === "UnauthorizedError") {
    // jwt authentication error
    return res.status(401).json({
      message: "Invalid Token"
    });
  }
  if (name === "Unauthorized") {
    // jwt authentication error
    return res.status(401).json({
        status,
        data,
        message
    });
  }
  if (code === 11000) {
    return res.status(422).json({
      status,
      data,
      message
    });
  }
  // default to 500 server error
  return res.status(500).json({
    message: "Internal server error.",
    status,
    data
  });
};
