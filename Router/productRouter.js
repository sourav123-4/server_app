const express = require("express");
const router = express.Router();
const Product = require("../modals/product");

router.post("/addproduct", async (req, res) => {
  console.log("product", req.body);
  const {
    title,
    price,
    weight,
    length,
    description,
    image,
    rating,
    stock,
    entryDate,
    location,
  } = req.body;
  Product.findOne({ title: title }, (err, product) => {
    if (product) {
      res.send("product already registered");
    } else {
      const product1 = new Product({
        title,
        price,
        weight,
        length,
        description,
        image,
        rating,
        stock,
        entryDate,
        location,
      });
      product1
        .save()
        .then(() => {
          res.send(product1);
        })
        .catch((e) => {
          res.send(e);
        });
    }
  });
});

router.get("/product", (req, res) => {
  Product.find()
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
