var jwt = require("jsonwebtoken");
// import privateKEYs from "./tokenKeys/private.key";

var cratetoken = (DataToEncToken) => {
  var privateKEY = `${process.env.privatekey}`;
  // SIGNING OPTIONS
  var signOptions = {
    issuer: process.env.Issuer,
    subject: process.env.Subject,
    audience: process.env.Audience, // Audience
    // expiresIn: "12h",
    algorithm: "RS256",
  };
  var token = jwt.sign(DataToEncToken, privateKEY, signOptions);
  return token;
};

module.exports = cratetoken;
