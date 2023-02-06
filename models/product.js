const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const productSchema=new mongoose.Schema({
    
    name:{
        type:String, 
        required:true
    },
    price:{
        type:Number,
        min:0
    },
    desc:{
        type:String,
    }
})
const Product=mongoose.model('Product', productSchema);

module.exports=Product;