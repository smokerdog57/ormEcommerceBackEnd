// import express from 'express';
// // import model (table) class instances
// import Category from '../../models/Category.js';
// import Product from '../../models/Product.js';

const router = require('express').Router();
const { Category, Product } = require('../../models');

// find all categories and include associated products
router.get('/', (req, res) => {
   Category.findAll({
    include: [Product],
  })
    .then((categories) => res.json(categories))
    .catch((err) => res.status(500).json({ error: '6. cate-routes: Internal server error', details: err }));
});

// find one category by its `id` value and include its associated Products
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [Product],
  })
    .then((category) => {
      if (!category) {
        return res.status(404).json({ error: 'Category not found' });
      }
      return res.json(category);
    })
    .catch((err) => res.status(400).json({ error: 'Bad request', details: err }));
});

// create a new category
router.post('/', (req, res) => {
  Category.create(req.body)
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(400).json({ error: 'Bad request', details: err }));
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then(([updatedRows]) => {
      if (updatedRows === 0) {
        return res.status(404).json({ error: 'Category not found' });
      }
      return res.status(200).json({ message: 'Category updated successfully' });
    })
    .catch((err) => res.status(400).json({ error: 'Bad request', details: err }));
});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedCategory) => {
      if (!deletedCategory) {
        return res.status(404).json({ error: 'Category not found' });
      }
      return res.status(200).json({ message: 'Category deleted successfully' });
    })
    .catch((err) => res.status(400).json({ error: 'Bad request', details: err }));
});

//export default router;
module.exports = router;
