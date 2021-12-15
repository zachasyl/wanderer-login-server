const mongoose = require("mongoose");
const providerSchema = mongoose.Schema(
  {
    user_Id: String,
    address: String,
    contact: String,
    carddetails: Number,
    verified: { type: Boolean, defaultValue: false },
  },
  { collection: "providers" }
);
module.exports = providerSchema;
