const mongoose = require('mongoose');
const Product=require('./models/product');
    


const arr = [
    {
        name: "Iphone 12",
        price: 100000,
        desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document."
    },
    {
        name: "Macbook Air",
        price: 200000,
        desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document."
    },
    
    {
        name: "Titan Watch",
        price: 70000,
        desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document."
    },
    {
        name: "Shoes",
        price: 3000,
        desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document."
    },
    {
        name: "T-Shirt",
        price: 800,
        desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document."
    }
];

function seed(){
    Product.insertMany(arr)
    .then(()=>{
        console.log("DB SEEDED");
    })
    .catch(err=>{
        console.log(err);
    })

}
module.exports=seed;