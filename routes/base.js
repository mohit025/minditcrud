const express = require('express');

const router = express.Router();
// const Burger=require('../model/burger');
const mycontrol = require('../controller/mycontroller');
const myproduct=require('./product');
router.get('/', mycontrol.home);


router.use('/products', myproduct);


module.exports = router;