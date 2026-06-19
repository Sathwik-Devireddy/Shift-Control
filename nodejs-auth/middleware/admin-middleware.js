const isAdminUser = (req, res, next) => {
  if (req.userInfo.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "unauthorized / not admin" });
  }
};
module.exports = isAdminUser;
