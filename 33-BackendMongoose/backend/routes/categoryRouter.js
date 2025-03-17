const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.post('/categories', postController.createCategory);
router.get('/', postController.getCategories);
router.delete('/:id', postController.deleteCategory);


module.exports = router;
