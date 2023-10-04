// import { Router } from 'express';
// import categoryRoutes from './category-routes.js'; 
// import productRoutes from './product-routes.js';
// import tagRoutes from './tag-routes.js';

const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

console.log('execution inside api/index.js');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;