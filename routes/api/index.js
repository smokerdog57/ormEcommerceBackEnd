// import dependencies
const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// Mount the categoryRoutes under the '/categories' path
router.use('/categories', categoryRoutes);

// Mount the productRoutes under the '/products' path
router.use('/products', productRoutes);

// Mount the tagRoutes under the '/tags' path
router.use('/tags', tagRoutes);

// Error handling middleware
router.use((err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging purposes
  res.status(500).json({ message: 'Internal Server Error' }); // Send an appropriate error response
});

module.exports = router;
