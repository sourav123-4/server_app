const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    mens:{
        tShirts:{
            type:String
        },
        casualShirts:{
            type:String
        },
        jeans:{
            type:String
        },
        casualTrouser:{
            type:String
        },
        formalShirts:{
            type:String
        },
        sportsWear:{
            type:String
        },
        InnerWear:{
            type:String
        },
        formalTrouser:{
            type:String
        },
    },
    womens:{
        kurtis:{
            type:String
        },
        salwarSuits:{
            type:String
        },
        tops:{
            type:String
        },
        jumpsuits:{
            type:String
        },
        sarees:{
            type:String
        },
    },
    beauty:{
        type:String
    },
    jewellery:{
        type:String
    },
    watches:{
        type:String
    },
    eyewear:{
        type:String
    }
    
},{ timestamps : true })

const Category = new mongoose.model('category', categorySchema);
module.exports = Category;