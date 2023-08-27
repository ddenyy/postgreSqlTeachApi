const Router = require('express');
const router = new Router();
const PostController = require('../controllers/postControllers');



router.post('/post', PostController.createPost);
router.get('/post', PostController.getPostsByUser);

module.exports = router;


