const express = require('express');
const router = express.Router();
const homeController = require('./controllers/home');
const hypnoController = require('./controllers/hypno');
const counsellingController = require('./controllers/counselling');
const shopController = require('./controllers/shop');
const pricesController = require('./controllers/prices');
const blogController = require('./controllers/blog');

router.get('/', homeController.index);

router.get('/hypnotherapy.hbs', hypnoController.index);

router.get('/counselling.hbs', counsellingController.index);

router.get('/shop.hbs', shopController.index);

router.get('/prices.hbs', pricesController.index);

router.get('/blog.hbs', blogController.index); 

module.exports = router;