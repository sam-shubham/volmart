const mongoose = require("mongoose");
const users = mongoose.Schema({
          name:String,
          email: String,
          contact:Number,
          password: String,
          todel: Boolean, //To delete Development data
        });

module.exports =
  mongoose.models.users || mongoose.model("users", productschema);
