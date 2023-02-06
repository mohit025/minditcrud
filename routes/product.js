const express = require('express');
const router = express.Router();

const Product = require('../models/product');
const mycontrol = require('../controller/mycontroller');

router.get('/products', mycontrol.home);
router.get('/products/new', mycontrol.new);

router.post('/post', mycontrol.mypost);


router.get('/products/:id', mycontrol.getshow);
router.get('/products/:id/edit', mycontrol.editid);
router.patch('/products/:id', mycontrol.mypatch);



module.exports = router;