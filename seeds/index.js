//automates the process of initializing and seeding a database with initial data.

// import seed functions
import seedCategories from './category-seeds';
import seedProducts from './product-seeds';
import seedTags from './tag-seeds';
import seedProductTags from './product-tag-seeds';

import sequelize from '../config/connection';

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedCategories();
    console.log('\n----- CATEGORIES SEEDED -----\n');

    await seedProducts();
    console.log('\n----- PRODUCTS SEEDED -----\n');

    await seedTags();
    console.log('\n----- TAGS SEEDED -----\n');

    await seedProductTags();
    console.log('\n----- PRODUCT TAGS SEEDED -----\n');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding the database:', error);
    process.exit(1);
  }
};

seedAll();