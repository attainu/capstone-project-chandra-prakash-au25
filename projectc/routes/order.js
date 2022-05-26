const Order = require("../models/Order");
const {
  verifyToken,
  verifyAndAdmin,
  verifyAndDeveloper,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", async (req, res) => {
  const newOrder = new Order(req.body);
  console.log(req.body);
  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id",verifyAndAdmin,async (req, res) => {
  try {
    console.log(req.params.id)
    await Order.findByIdAndDelete(req.params.id);

    res.status(200).json("Order has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

// //GET ALL

router.get("/orders",verifyAndDeveloper,async (req, res) => {
  try {
    const orders = await Order.find();
    console.log(orders);
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;