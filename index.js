const express = require('express');
const app =express();
//  const seedDB=require('./seed');
const mongoose = require('mongoose');

const Product=require('./models/product');
const path=require('path');
const productRoutes=require('./routes/product.js');
app.set('view engine' , 'ejs');
app.set('views', path.join(__dirname,'/views'));
// app.use(express.static(path.join(__dirname,'/public')));
const methodOverride = require('method-override')
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

    mongoose.connect('mongodb://127.0.0.1:27017/shopAppnew', )
    .then(()=>{
        console.log("DB connected");
    })
    .catch(err=>{
        console.log("error in connecting to DB");
        console.log(err);
    });


// seedDB();
app.use(productRoutes);

app.listen(3010, ()=>{
    console.log("server running on port 3010");
})