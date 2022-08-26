const express = require("express");
const router = express.Router();
const User = require("../modals/user");

router.post("/adduser", async(req, res) => {
    console.log("user",req.body);
    const {address,name,email,username,password} = req.body;
    User.findOne({email : email},(err,user)=>{
        if(user){
            res.send("user already registered")
        }else{
            const user1 = new User({
                address,name,email,username,password
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
        
    })
});
router.get("/user",(req,res)=>{
    User.find().then((result)=>{
        console.log(result)
        res.send(result)
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports = router;