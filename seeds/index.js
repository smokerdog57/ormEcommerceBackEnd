//automates the process of initializing and seeding a database with initial data.

// import seed functions
import seedCategories from './category-seeds.js';
import seedProducts from './product-seeds.js';
import seedTags from './tag-seeds.js';
import seedProductTags from './product-tag-seeds.js';

import sequelize from '../config/connection.js';

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