const jwt = require("jsonwebtoken");
function validateUser(req, res, next) {
  const jwtSecret = process.env.SECRET_JWT;
  const token = req.headers.authorization.split(" ")[1];

  console.log(token, "token");

  if (!token) {
    res.status(401).json({
      message: "Login !!!",
    });
  } else {
    jwt.verify(token, jwtSecret, (error, decodedString) => {
      if (error && error.message === "jwt expired") {
        res.status(302).send("redirect to login");
      }

      if (error) {
        res.status(401).json({
          message: "Login !!! with correct password",
        });
      } else {
        const username = decodedString.user.username;
        const userId = decodedString.user.id;
        const role = decodedString.role;

        req.username = username;
        req.userId = userId;
        req.role = role;
        next();
      }
    });
  }
}

module.exports = { validateUser };
