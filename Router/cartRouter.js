const express = require("express");
const router = express.Router();
const Cart = require("../modals/Cart");

router.post("/addcart", async (req, res) => {
  console.log("cart", req.body);
  const { userId, productId, count } = req.body;
  Cart.findOne({ productId: productId }, (err, cart) => {
    if (cart) {
      res.json("cart already registered");
    } else {
      const cart1 = new Cart({
        userId,
        productId,
        count,
      });
      cart1
        .save()
        .then(() => {
          res.statusCode(200).json(cart1);
        })
        .catch((e) => {
          res.statusCode(404).json(e);
        });
    }
  });
});

router.get("/cart", (req, res) => {
  Cart.find()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json(err);
    });
});

module.exports = router;
