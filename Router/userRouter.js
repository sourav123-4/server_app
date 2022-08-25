const express = require("express");
const router = express.Router();
const User = require("../modals/user");

// router.post("/adduser", async (req, res) => {
//     const {data} = req.body
//   User.findOne({ id: id }, (err, user) => {
//       console.log("user",)
//     if (user) {
//       res.send({ message: "user already registered" });
//     } else {
//       const user1 = new User({
//         data
//       });
//       user1
//         .save()
//         .then(() => {
//           res.send(user1);
//         })
//         .catch((e) => {
//           res.send(e);
//         });
//     }
//   });
// });
router.get("/user",(req,res)=>{
    User.find().then((result)=>{
        console.log(result)
        res.send(result)
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports = router;