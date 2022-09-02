const express = require("express");
const router = express.Router();
const Order = require("../modals/Order");

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
    productId,
    userId,
  } = req.body;
  Order.findOne({ trackingNo: trackingNo }, (err, order) => {
    if (order) {
      res.send("order already registered");
    } else {
      const order1 = new Order({
        productId,
        userId,
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
          res.json(order1);
        })
        .catch((e) => {
          res.json(e);
        });
    }
  });
});

router.get("/order", (req, res) => {
  Order.find()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/totalorderamount", (req, res) => {
  Order.aggregate([
    {
      $group: { _id: null, TotalAmount: { $sum: "$amount" } },
    },
  ])
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.get("/totalorders", (req, res) => {
  Order.countDocuments()
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
