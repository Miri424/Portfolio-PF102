const Post = require('../models/postModel');

 const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

 const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

 const createPost = async (req, res) => {
  try {
    const { title, category, image, content } = req.body;
    const newPost = new Post({ title, category, image, content });
    await newPost.save();
    
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPost) {
        return res.status(404).json({ message: '404 not found' });
    }
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost){
        return res.status(404).json({ message: 'Post not found' });
    }
    res.json({ message: 'success' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.modules = {
    getPosts,
    getPostById,
    createPost, 
    updatePost,
    deletePost
} 