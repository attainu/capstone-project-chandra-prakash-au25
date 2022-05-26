const mongoose = require("mongoose");

const BidsSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    acceptorder:{type:String,required:true},
    mobile:{type:Number,required:true}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bids", BidsSchema);