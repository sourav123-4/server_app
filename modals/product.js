const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title:{
        type:String,
    },
    price:{
        type:String,
    },
    weight:{
        type:String
    },
    length:{
        type:String
    },
    description:{
        type:String,
    },
    image:{
        type:String,
    },
    rating:{
        rate:{
            type:Number,
        },
        count:{
            type:Number,
        }
    },
    stock:{
        type:Number
    },
    entryDate:{
        type:String
    },
    location:{
        type:String
    }
},{ timestamps : true })

const Product = new mongoose.model('product', productSchema);
module.exports = Product;