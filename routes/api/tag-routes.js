// This script defines the `/api/tags` endpoint
const router = require('express').Router();  // import { Router } from 'express';

const { Tag, Product, ProductTag } = require('../../models'); // import model (table) class instances

router.get('/', (req, res) => {
  Tag.findAll({
    include: [
      {
        model: Product,
        through: ProductTag,
      },
    ],
  })
    .then((tags) => res.status(200).json(tags)) // Status 200 indicates success
    .catch((err) => res.status(500).json(err)); // Status 500 for server error
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
        through: ProductTag,
      },
    ],
  })
    .then((tag) => {
      if (!tag) {
        // Status 404 for resource not found
        return res.status(404).json({ message: 'Tag not found' });
      }
      res.status(200).json(tag); // Status 200 indicates success
    })
    .catch((err) => res.status(500).json(err)); // Status 500 for server error
});

router.post('/', (req, res) => {
  Tag.create(req.body)
    .then((tag) => res.status(201).json(tag)) // Status 201 for resource created
    .catch((err) => res.status(400).json(err)); // Status 400 for bad request
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((result) => {
      if (result[0] === 0) {
        // Status 404 if no rows were updated
        return res.status(404).json({ message: 'Tag not found' });
      }
      res.status(200).json({ message: 'Tag updated' }); // Status 200 indicates success
    })
    .catch((err) => res.status(500).json(err)); // Status 500 for server error
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((result) => {
      if (result === 0) {
        // Status 404 if no rows were deleted
        return res.status(404).json({ message: 'Tag not found' });
      }
      res.status(200).json({ message: 'Tag deleted' }); // Status 200 indicates success
    })
    .catch((err) => res.status(500).json(err)); // Status 500 for server error
});

module.exports = router;