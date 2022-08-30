const express = require("express");
const router = express.Router();
const User = require("../modals/user");

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
          res.send(user1);
        })
        .catch((e) => {
          res.send(e);
        });
    }
  });
});
router.get("/user", (req, res) => {
  User.find()
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
// for highest order by count
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
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
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
    // {
    //   $project: {
    //     AllOrders: 1,
    //     name: 1,
    //   },
    // },
  ])
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
