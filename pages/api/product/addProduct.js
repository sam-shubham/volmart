import { body, validationResult } from "express-validator";
import nc from "next-connect";
import productmodel from "../../../lib/Database/models/productmodel";
import verifyauth from "../../../lib/jsonWebToken/verifytoken";

const route = nc({
  onError(err, req, res, next) {
    console.log(err.stack)(500).send("Internal Server Error");
  },
})
  .use(verifyauth)
  .use(
    body("productImg", "Image Must Be Url.").isURL(),
    body("productName", "Product Name Must Be More Than 1 Character").isLength({
      min: 2,
    }),
    body("productHighlights", "product Highlights Must Be Array.").isArray({
      min: 1,
    }),
    body("productPrice", "product Price Must Exist!")
      .isLength({ min: 1 })
      .isNumeric()
      .withMessage("Price Must Be Numeric!"),
    body("productDesc", "product Desc Must Exit!").isLength({ min: 1 }),
    body("productType", "product Type Must Exist!").isLength({ min: 1 })
  )
  .post((req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    var objtoedit = req.body;
    objtoedit.productOfUser = req.user;
    var datatosend = new productmodel(objtoedit);
    datatosend
      .save()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => res.send("Request Completed With Error " + err));
    // res.json({
    //   reqs: req.body.productImg,
    //   req1: req.body.productName,
    //   req2: req.user,
    //   reqr: req.body.productHighlights,
    //   reqc: req.body.productPrice,
    //   reqa: req.body.productDesc,
    //   reqv: req.body.productType,
    // });
  });

export default route;
