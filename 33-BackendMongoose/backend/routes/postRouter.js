const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/', postController.modules.getPosts);
router.get('/:id', postController.modules.getPostById);
router.post('/', postController.modules.createPost);
router.put('/:id', postController.modules.updatePost);
router.delete('/:id', postController.modules.deletePost);

module.exports = router;