var jwt = require("jsonwebtoken");

const verifyauth = (req, res, next) => {
  var token = req.headers.auth_token;
  var verifyOptions = {
    issuer: process.env.Issuer,
    subject: process.env.Subject,
    audience: process.env.Audience,
    algorithm: ["RS256"],
  };
  var publicKEY = `${process.env.publickey}`;
  try {
    var legit = jwt.verify(token, publicKEY, verifyOptions);
    req.user = legit._id;
    next();
  } catch {
    res.status(401).send({ Error: "Please Verify Authorization Token" });
  }
};

module.exports = verifyauth;
