import nc from "next-connect";
// import DB from "../../../lib/Database/";
import DB from "../../../lib/Database/dbconnect";
import productmodel from "../../../lib/Database/models/productmodel";

DB();
const route = nc({
  onError(err, req, res, next) {
    console.log(err.stack);
  },
}).get((req, res) => {
  productmodel
    .find(
      req.query.getproduct !== "allproduct"
        ? { productType: req.query.getproduct }
        : {}
    )
    .then((data, err) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send(data);
      }
    });
});
export default route;
