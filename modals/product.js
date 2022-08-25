const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id:{
        type:Number,
        required: true,
    },
    title:{
        type:String,
    },
    price:{
        type:String,
    },
    description:{
        type:String,
    },
    category:{
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
    }
},{ timestamps : true })

const Product = new mongoose.model('product', productSchema);
module.exports = Product;