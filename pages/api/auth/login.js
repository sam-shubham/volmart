import nc from "next-connect";
import { body, validationResult } from "express-validator";
import DB from "../../../lib/Database/dbconnect";
import usermodel from "../../../lib/Database/models/usermodel";
import { decrypthex, createkey } from "../../../lib/Encryption/encryption";
import createtoken from "../../../lib/jsonWebToken/createToken";

const route = nc({
  onError(err, req, res, next) {
    console.log(err.stack);
    req.statusCode(500).send("Internal Error Occured");
  },
})
  .use(
    body("email", "Please Enter Valid Email").isEmail(),
    body("password", "Password Length Must Be More Than 8").isLength({ min: 8 })
  )
  .post(async (req, res) => {
    const HARDCODEKEY = createkey(process.env.secretkey);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    await DB();
    const { email, password } = req.body;
    usermodel
      .findOne({ email: email.toUpperCase() })
      .then((data) => {
        if (data) {
          let secpassword = decrypthex(
            data.password[0],
            HARDCODEKEY,
            Buffer.from(data.password[1].toString("hex"), "hex")
          );
          if (password == secpassword) {
            var token = createtoken({
              _id: data._id,
            });
            res.send(token);
          } else {
            res.send("Please Check Your Credentials Again");
          }
        } else {
          res.status(401).send("Unable To Find The User");
        }
      })
      .catch((err) => res.send("Request Completed With Errors" + err));
  });

export default route;
