const express = require("express");
const router = express.Router();
const Category = require("../modals/category");

router.get("/category",(req,res)=>{
    Category.find().then((result)=>{
        console.log(result)
        res.send(result)
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports = router;