// This script defines the `/api/products` endpoint

import { Router } from 'express';   // import Router library from express
import { Product, Category, Tag, ProductTag } from '../../models';  // import model (table class instances
const router = Router();


// get all products and include its associated Category and Tag data. This route is triggered when a GET 
// request is made to the root path '/api/products'. json formatted array of product objects are returned.
router.get('/', (req, res) => {
  Product.findAll({
    include: [
      Category,
      {
        model: Tag,
        through: ProductTag,
      },
    ],
  })
    .then((products) => res.json(products))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err); // if error, return 500 - server error
    });
});
// get one product by id and include its associated Category and Tag data. This route is triggered when a GET 
// request is made to the path '/api/products/:id'. json formatted product object is returned.
router.get('/:id', (req, res) => {
  Product.findOne({
    where: { id: req.params.id }, // filter by product id
    include: [
      { model: Category },
      {
        model: Tag,
        through: ProductTag,
      },
    ],
  })
    .then((product) => res.json(product))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err); // if error, return 400 - request error
    });
});

// Create a new product. This route is triggered when a POST 
// request is made to the root path '/api/products' with the req.body specified in the Insomnia JSON body section.
// A JSON-formatted product object is returned.
router.post('/', (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  Product.create(req.body)
    .then((product) => {
      // If there are product tags, we need to create pairings to bulk create in the ProductTag model.
      if (req.body.tagIds && req.body.tagIds.length > 0) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // If no product tags, just respond with a successful request.
      res.status(200).json(product); // Returns a successful request.
    })
    .then((productTagIds) => {
      if (productTagIds) {
        // If productTagIds exist (when there are tags associated), respond with them.
        res.status(200).json(productTagIds);
      } else {
        // If no product tags, just respond with a successful request.
        res.status(200).json(product);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json(err); // If there's an error, return 400 - Bad Request.
    });
});

// Route Definition: This route is defined to handle HTTP PUT requests at the path '/api/products/:id',
// where the 'id' parameter in the URL identifies the product to update. This route updates
// product information and its associated tags. It's designed to handle JSON-formatted data sent through
//  a PUT request. 
router.put('/:id', (req, res) => {

// Update product data: Takes the request body (req.body) as the new data and updates the product in the 
// database.
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    // Checks if req.body.tagIds exists and has a length greater than zero. If so, it proceeds to 
    // update associated tags. It first retrieves existing product tags for the specified product.
    .then((product) => {
      if (req.body.tagIds && req.body.tagIds.length > 0) {
        // Find existing product tags associated with the product.
        ProductTag.findAll({
          where: { product_id: req.params.id },
        })
          // Filtering New Tags: filters the new tag IDs (req.body.tagIds) to identify which tags are new and 
          /// need to be associated with the product. These new tag IDs are collected in the newProductTags array.
          .then((productTags) => {
            // Create a filtered list of new tag_ids.
            const productTagIds = productTags.map(({ tag_id }) => tag_id);
            const newProductTags = req.body.tagIds
              .filter((tag_id) => !productTagIds.includes(tag_id))
              .map((tag_id) => {
                return {
                  product_id: req.params.id,
                  tag_id,
                };
              });

            // Determine Tags to Remove. Determine which tags need to be removed. 
            // Tags that are associated with the product but not included in the new tagIds are marked for removal.
            const productTagsToRemove = productTags
              .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
              .map(({ id }) => id);

            // Updating Tags: Executes two actions in parallel using Promise.all(): 
            // (1) removes the tags marked for removal with ProductTag.destroy() and (2) adds the new tags with ProductTag.bulkCreate().
            return Promise.all([
              ProductTag.destroy({ where: { id: productTagsToRemove } }),
              ProductTag.bulkCreate(newProductTags),
            ]);
          })
          .then(() => {
            // After updating tags, respond with the updated product in JSON format.
            return res.json(product);
          });
      } else {
        // If no tag updates are needed, respond with the updated product.
        return res.json(product);
      }
    })
    // If there's an error during the process, logs the error and responds with a status code 400, bad request.
    .catch((err) => {
      console.error(err);
      res.status(400).json(err); // If there's an error, return 400 - Bad Request.
    });
});

// Handles HTTP DELETE requests at the path '/api/products/:id'. 
// It expects an 'id' parameter in the URL to identify the product to delete. Logs the deleted product's data 
// upon success and handles errors appropriately.
router.delete('/:id', (req, res) => {

  // Product Deletion: deletes a product with specified id from the database.
  Product.destroy({
    where: {
      id: req.params.id,
    },
  })
  // Success Handling:handles the success response. When the product is successfully deleted,
  // it receives the number of affected rows (products) as a parameter. It logs this to the console and responds with a 
  // JSON message containing the deleted product's data.
    .then((products) => {
      console.log(products);
      res.json(products);
    })
    // Error Handling: If there's an error during the deletion process, it is caught using .catch(). 
    // It logs the error to the console and responds with a status code of 400, indicating a Bad Request, 
    //along with the error details in JSON format.
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});


export default router;