// collect all the individual Sequelize models representing database tables) and export them as a single object 
// so that they can be easily imported and used in other parts of the application.

const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// export models
module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
  };