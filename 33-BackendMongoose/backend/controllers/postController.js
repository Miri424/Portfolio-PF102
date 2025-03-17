const Post = require('../models/postModel');
const Category = require('../models/categoryModel');

const getPosts = async (req, res) => {
  try {
    const { search, sort } = req.query; 

    let query = {};
    if (search) {
      query.title = { $regex: search, $options: "i" }; 
    }

    const sortOptions = {};
    if (sort) {
      if (sort === "title") {
        sortOptions.title = 1;
      } else if (sort === "date") {
        sortOptions.createdAt = -1; 
      } else if (sort === "category") {
        sortOptions.categoryId = 1; 
      }
    }
    
    const posts = await Post.find(query).populate('categoryId', 'name').sort(sortOptions);
    res.json({
      data: posts
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

 const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('categoryId', 'name');;
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
    const { title, categoryId, content, date } = req.body;
    const imageUrl = `http://localhost:5000/${req.file.path}`
    console.log(req.file);

    if (!title || !categoryId || !content || !date) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newPost = new Post({
      title,
      categoryId,
      content,
      image: imageUrl,
      date,
    });

    await newPost.save();
    res.status(201).json({ message: "Post created successfully!", post: newPost });
  } catch (error) {
    res.status(500).json({ message: "Error creating post", error: error.message });
  }
};


const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const createCategory = async (req, res) => {
  try {
    const { name } = req.body; 

    if (!name) {
      return res.status(400).json({ message: 'Name is required' });
    }

    const newCategory = new Category({ name });  
    await newCategory.save();

    res.status(201).json({
      message: 'Category created successfully',
      category: newCategory
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deletedCategory){
        return res.status(404).json({ message: 'Post not found' });
    }
    res.json({ message: 'success' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPost) {
        return res.status(404).json({ message: 'Post not found' });
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

// burda sehv upload etmisdim sekilleri ona gore bele bir funskiya yazmali oldum.
const deleteAll = async (req, res) => {
    try {
    await Post.deleteMany();
    res.json({ message: 'All posts deleted' });
} catch (error) {
    res.status(500).json({ message: error.message });
}
}


module.exports = {
    getPosts,
    getPostById,
    createPost, 
    updatePost,
    deletePost,
    deleteAll,
    createCategory,
    getCategories,
    deleteCategory
} 