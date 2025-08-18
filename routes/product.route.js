const express = require('express');
const router = express.Router();
const {myProducts} = require('../controllers/product.controller');

router.get('/products/:id', myProducts);

module.exports = router