const express = require('express');
const router = express.Router();

const Product = require('../models/product');
const mycontrol = require('../controller/mycontroller');


router.get('/', mycontrol.home);
router.get('/new', mycontrol.new);

router.post('/', mycontrol.mypost);


router.get('/:id', mycontrol.getshow);
router.get('/:id/edit', mycontrol.editid);
router.patch('/:id', mycontrol.mypatch);



module.exports = router;