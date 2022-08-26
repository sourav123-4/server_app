const express = require("express");
const router = express.Router();
const Category = require("../modals/category");

router.post("/addcategory", async (req, res) => {
  console.log("category", req.body);
  const { mens, womens, beauty, jewellery, watches, eyewear } = req.body;
  Category.findOne({ title: title }, (err, category) => {
    if (category) {
      res.send("category already registered");
    } else {
      const category1 = new Category({
        mens,
        womens,
        beauty,
        jewellery,
        watches,
        eyewear,
      });
      category1
        .save()
        .then(() => {
          res.send(category1);
        })
        .catch((e) => {
          res.send(e);
        });
    }
  });
});

router.get("/category", (req, res) => {
  Category.find()
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
