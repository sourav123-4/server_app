const express = require("express");
const router = express.Router();
const Order = require("../modals/order");

router.post("/addorder", async (req, res) => {
  console.log("order", req.body);
  const {
    amount,
    orderDate,
    alternativephone,
    trackingNo,
    count,
    shippingDate,
    paymentMethod,
  } = req.body;
  Order.findOne({ trackingNo: trackingNo }, (err, order) => {
    if (order) {
      res.send("order already registered");
    } else {
      const order1 = new Order({
        amount,
        orderDate,
        alternativephone,
        trackingNo,
        count,
        shippingDate,
        paymentMethod,
      });
      order1
        .save()
        .then(() => {
          res.send(order1);
        })
        .catch((e) => {
          res.send(e);
        });
    }
  });
});

router.get("/order", (req, res) => {
  Order.find()
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
