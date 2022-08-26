const express = require("express");
const router = express.Router();
const Cart = require("../modals/cart");

router.get("/cart",(req,res)=>{
    Cart.find().then((result)=>{
        console.log(result)
        res.send(result)
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports = router;