const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ msg: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    req.user = decoded; // attach user info to req
    next();
  } catch (err) {
    return res.status(403).json({ msg: "Invalid Token" });
  }
};

module.exports = authMiddleware;
