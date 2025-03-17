const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const  validate  = require('../middlewares/joiValidate');
const upload = require('../middlewares/multerMiddleware');

router.get('/', postController.getPosts);
router.get('/:id', postController.getPostById);
router.post('/', upload.single("image"), validate, postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);
router.delete('/', postController.deleteAll)


module.exports = router;
