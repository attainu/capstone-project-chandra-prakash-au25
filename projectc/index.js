const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const orderRoute = require("./routes/order");
const bidsRoute = require("./routes/bids");

const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.get('/',(req,res)=>{
  res.send("hello from home")
})
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/orders", orderRoute);
app.use("/api/bids", bidsRoute);


app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});