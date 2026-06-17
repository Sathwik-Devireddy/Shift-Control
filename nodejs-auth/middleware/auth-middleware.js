const jwt = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log(authHeader);
  const token = authHeader && authHeader.split(" ")[1];
  if (!token)
    return res.status(401).json({ message: "unauthorized ,no token provided" });
  try {
    const decodedtoken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decodedtoken);
    req.userInfo = decodedtoken;
    next();
  } catch (e) {
    console.log(e);
    return res.status(401).json({ message: "unauthorized ,invalid token" });
  }
};

module.exports = authMiddleware;
