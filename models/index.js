// collect all the individual Sequelize models representing database tables) and export them as a single object 
//so that they can be easily imported and used in other parts of the application.

// Import models
import Product from './Product';
import Category from './Category';
import Tag from './Tag';
import ProductTag from './ProductTag';

// export models
export { Product, Category, Tag, ProductTag };