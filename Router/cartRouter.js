const express = require("express");
const router = express.Router();
const Cart = require("../modals/cart");

router.post("/addcart", async (req, res) => {
  console.log("cart", req.body);
  const { userId, productId, count } = req.body;
  Cart.findOne({ productId: productId }, (err, cart) => {
    if (cart) {
      res.send("cart already registered");
    } else {
      const cart1 = new Cart({
        userId,
        productId,
        count,
      });
      cart1
        .save()
        .then(() => {
          res.send(cart1);
        })
        .catch((e) => {
          res.send(e);
        });
    }
  });
});

router.get("/cart", (req, res) => {
  Cart.find()
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
