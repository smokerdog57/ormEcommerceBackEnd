// Populates the Category model's table with initial data (categories) by calling the seedCategories function. 
const { Category } = require('../models');  //import Category from '../models/Category.js';

// seed the category data
const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;