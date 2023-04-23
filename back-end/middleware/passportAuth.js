const passport = require("passport");

const authenticateJwt = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (err || !user) {
      res.status(401).json({ message: "Unauthorized" });
    } else {
      req.user = user;
      next();
    }
  })(req, res, next);
};

module.exports = authenticateJwt;
