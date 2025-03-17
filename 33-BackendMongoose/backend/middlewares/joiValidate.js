const Joi = require('joi');

const blogSchema = Joi.object({
    title: Joi.string().min(3).max(15).required(),
    categoryId: Joi.string().min(8).max(50),
    content: Joi.string().min(10).max(1000).required(),
    image: Joi.string(),
    date: Joi.date(),
})

// module.exports = blogSchema;


const validate = (req, res, next) => {
    try {
        console.log(blogSchema);
    const value = blogSchema.validate(req.body)    
    console.log(value);
    next()
    } catch (error) {
        console.error(error.message);
    }

}

module.exports = validate;
