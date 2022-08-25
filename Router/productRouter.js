const express = require("express");
const router = express.Router();
const Product = require("../modals/product");

router.get("/addproduct",(req,res)=>{
    Product.find().then((result)=>{
        console.log(result)
        res.send(result)
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports = router;