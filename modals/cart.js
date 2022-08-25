const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    id:{
        type:Number,
        required: true,
    },
    userId:{
        type:String,
        required:true,
    },
    date:{
        type:String,
    },
    products:[
        {
            productId:Number,
            quantity:Number,
        },
        {
            productId:Number,
            quantity:Number,
        },
        {
            productId:Number,
            quantity:Number,
        }
    ]
},{ timestamps : true })

const Cart = new mongoose.model('product', cartSchema);
module.exports = Cart;