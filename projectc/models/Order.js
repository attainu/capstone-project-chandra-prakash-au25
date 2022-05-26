const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    name: { type: String, required:true},
    requirement:{type:String,required:true},
    mobile: { type: Number, required: true },
    email: { type: String, required: true },
    address: { type:String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);