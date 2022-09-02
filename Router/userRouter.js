const express = require("express");
const router = express.Router();
const User = require("../modals/User");

router.post("/adduser", async (req, res) => {
  console.log("user", req.body);
  const {
    address,
    country,
    email,
    registrationDat,
    username,
    password,
    name,
    phone,
  } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send("user already registered");
    } else {
      const user1 = new User({
        address,
        country,
        email,
        registrationDat,
        username,
        password,
        name,
        phone,
      });
      user1
        .save()
        .then(() => {
          res.json(user1);
        })
        .catch((e) => {
          res.json(e);
        });
    }
  });
});

router.get("/user", (req, res) => {
  User.find()
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.get("/highestorderuser", (req, res) => {
  User.aggregate([
    {
      $lookup: {
        from: "orders",
        localField: "_id",
        foreignField: "userId",
        as: "AllOrders",
        pipeline: [{ $group: { _id: "$userId", count: { $sum: 1 } } }],
      },
    },
    {
      $project: {
        AllOrders: 1,
        name: 1,
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

router.get("/highestorderuserbyamount", (req, res) => {
  User.aggregate([
    {
      $lookup: {
        from: "orders",
        localField: "_id",
        foreignField: "userId",
        as: "AllOrders",
        pipeline: [
          { $group: { _id: "$userId", TotalAmount: { $sum: "$amount" } } },
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

router.get("/totalusers", (req, res) => {
  User.countDocuments()
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
