const express = require("express");
const router = express.Router();
const Category = require("../modals/Category");

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
          res.json(category1);
        })
        .catch((e) => {
          res.json(e);
        });
    }
  });
});

router.get("/category", (req, res) => {
  Category.find()
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
