const express=require('express');
const Product = require('../models/product');

module.exports.home=async (req, res) => {
    const products = await Product.find({});
    res.render('index', { products });
};

module.exports.new= (req,res)=>{
    res.render('new');
}

module.exports.mypost= async (req,res)=>{
    const product = req.body;
    await Product.create(product);
    res.redirect('/products');


}

module.exports.getshow=async(req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(req.params.id);
    res.render('show' , {product});
}


module.exports.editid=async(req,res)=>{
    const product= await Product.findById(req.params.id);
    res.render('edit',{product});
}



module.exports.mypatch=async(req, res) => {
        
    await Product.findByIdAndUpdate(req.params.id, req.body);

    res.redirect(`/products/${req.params.id}`);
}









