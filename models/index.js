// collect all the individual Sequelize models representing database tables) and export them as a single object 
//so that they can be easily imported and used in other parts of the application.

// Import models
// import Product from './Product';
// import Category from './Category';
// import Tag from './Tag';
// import ProductTag from './ProductTag';

const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// export models
//export { Product, Category, Tag, ProductTag };
module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
  };