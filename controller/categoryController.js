const Category = require("../model/categoryModel");
const Post = require('../model/postModel');
const slugify = require("slugify");

exports.categoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).send({ message: "Name is required" });
    }
    const existingCategory = await Category.findOne({ name });

    if (existingCategory) {
      return res
        .status(200)
        .send({ success: true, message: "Category already exists" });
    }
    const category = await new Category({
      name,
      slug: slugify(name),
    }).save();
    res.status(201).send({
      success: true,
      message: "Category created successfully",
      category,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ success: false, error, message: "Oops, something went wrong" });
  }
};
// update category
exports.updateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const category = await Category.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    if (!category) {
      return res
        .status(404)
        .send({ success: false, message: "Category not found" });
    }
    res.status(200).send({
      success: true,
      message: "Updated successfully",
      category,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ success: false, error, message: "Failed to update category" });
  }
};

// all category
exports.getAllCategory = async (req, res) => {
  try {
    const category = await Category.find({});
    res.status(200).send({
      success: true,
      success: true,
      message: "safii man mzigo umetema",
      category,
      
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Fail to get all category",
    });
  }
};

// get category
exports.getSingleCategory = async (req, res) => {
  try {
const category = await Category.findOne({slug:req.params.slug});
res.status(200).send({
    success: true,
    success: true,
    message: "safii man chico",
    category,
});
  } catch (error) {
    console.log(error);
    res.status(500).send({
        success: false,
        error,
        message: "Fail to get all category",
      });
    }
  }
// delete category
exports.deleteCategory = async(req, res) => {
try{
    const {id}=req.params;
await Category.findByIdAndDelete(id)

res.status(200).send({
    success: true,
    success: true,
    message: "Category Deleted successfully ",

});
}catch(error){
console.log(error);

res.status(500).send({
    success: false,
    error,
    message: "Fail to delete  category",
  });
}
}
//get category
exports.getPlotPost = async (req, res)=>{
  try{
    const category = await Category.findOne({ name:'Plot' });
    if (!category) {
      return res
        .status(404)
       .json({ success: false, error: "Category not found" });
    }
    const posts = await Post.find({ category: category._id }).populate(
      "category"
    );
    res.status(200).json({
      success: true,
      category,
     posts,
    });
  }catch(error){
  console.log("Error:", error);
  res.status(500).json({ success: false, error: "OOOPs something wron"})
  }
  
  }
  // getby  House
  exports.geHousetPost = async (req, res)=>{
    try{
      const category = await Category.findOne({ name:'Home' });
      if (!category) {
        return res
          .status(404)
         .json({ success: false, error: "Category not found" });
      }
      const posts = await Post.find({ category: category._id }).populate(
        "category"
      ).limit(3);;
      res.status(200).json({
        success: true,
        category,
       posts,
      })
    }catch(error){
    console.log("Error:", error);
    res.status(500).json({ success: false, error: "OOOPs something wron"})
    }
    
    }
    // frame Listing
     // getby  House
  exports.getFrameList = async (req, res)=>{
    try{
      const category = await Category.findOne({ name:'Frame' });
      if (!category) {
        return res
          .status(404)
         .json({ success: false, error: "Category not found" });
      }
      const posts = await Post.find({ category: category._id }).populate(
        "category"
      );
      res.status(200).json({
        success: true,
        category,
       posts,
      });
    }catch(error){
    console.log("Error:", error);
    res.status(500).json({ success: false, error: "OOOPs something wron"})
    }
    
    }