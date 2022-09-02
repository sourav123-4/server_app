const express = require("express");
const router = express.Router();
const Product = require("../modals/Product");

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
          res.json(product1);
        })
        .catch((e) => {
          res.json(e);
        });
    }
  });
});

router.get("/product", (req, res) => {
  Product.find()
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.get("/monthlyorder", (req, res) => {
  Product.aggregate([
    {
      $lookup: {
        from: "orders",
        localField: "_id",
        foreignField: "productId",
        as: "AllOrders",
        pipeline: [
          {
            $project: {
              title: 1,
            },
          },
          {
            $unwind: "$date",
          },
          {
            $group: {
              _id: {
                month: {
                  $month: "$date",
                },
                year: {
                  $year: "$date",
                },
              },
              allorders: {
                $addToSet: {
                  tracking_no: "$trackingNo",
                },
              },
            },
          },
        ],
      },
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

router.get("/countproduct", (req, res) => {
  Product.aggregate([
    {
      $lookup: {
        from: "orders",
        localField: "_id",
        foreignField: "productId",
        as: "AllOrders",
        pipeline: [{ $group: { _id: "$productId", count: { $sum: 1 } } }],
      },
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

router.get("/totalproducts", (req, res) => {
  Product.countDocuments()
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
