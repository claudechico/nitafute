const { json } = require("express");
const Post = require("../model/postModel");
const Category = require("../model/categoryModel");
const formidable = require("express-formidable");
const fs = require("fs");
const { default: slugify } = require("slugify");

exports.createPost = async (req, res) => {
  try {
    formidable({ multiples: true })(req, res, async (err) => {
      if (err) {
        return res
          .status(400)
          .json({ error: "Formidable error", details: err });
      }

      const { title, location, price, description, category,phone} =
        req.fields;
      const { photo } = req.files;
      // Validation
      if (
        !title ||
        !location ||
        !price ||
        !description ||
        !photo ||
        !category ||
        !phone
      ) {
        return res
          .status(400)
          .json({ error: "All fields including photo are required." });
      }

      if (photo.size > 3000000) {
        return res.status(400).json({ error: "Photo should be less than 3mb" });
      }
      const post = new Post({
        title,
        location,
        price,
        description,
        category,
        phone,
        author: req.user._id,

        slug: slugify(title),
      });
      // Handle photo upload
      post.photo.data = fs.readFileSync(photo.path);
      post.photo.contentType = photo.type;

      await post.save();

      res.status(201).json({
        success: true,
        message: "Post created Successfully",
        post,
      });
    });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ success: false, message: "Failed to create post." });
  }
};

// Update
exports.updatePost = async (req, res) => {
  try {
    formidable({ multiples: true })(req, res, async (err) => {
      if (err) {
        return res
          .status(400)
          .json({ error: "Formidable error", details: err });
      }

      const { title, location, price, description, category } = req.fields;
      const { photo } = req.files;

      if (photo && photo.size > 3000000) {
        return res.status(400).json({ error: "Photo should be less than 3mb" });
      }

      const post = await Post.findByIdAndUpdate(
        req.params.pid,
        { ...req.fields, slug: slugify(title) },
        { new: true }
      );

      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }

      if (photo) {
        post.photo = {
          data: fs.readFileSync(photo.path),
          contentType: photo.type,
        };
      }
      await post.save();

      res.status(200).json({
        success: true,
        message: "Post updated successfully",
        post,
      });
    });
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(500).json({ success: false, message: "Failed to update post." });
  }
};
// get single post
exports.getSinglePost = async (req, res) => {
  try {
    const posts = await Post.findOne({ slug: req.params.slug })
      .select("-photo")
      .populate("category");
    res.status(200).send({
      success: true,
      message: "safii man chico",
      posts,
    });
  } catch (error) {
    console.log("error");
    res.status(404).send({
      success: false,
      message: "oooops sory",
    });
  }
};


// Get by user post
exports.getPostByUser = async (req, res) => {
  try {
    const posts =  await Post.find({ author: user._id }).populate('author')
      .populate("category")
      .select("-photo")
      .limit(12)
      .sort({ createdAt: -1 });

    res.status(200).send({
      success: true,
      countTotal: posts.length,
      message: "You get all posts",
      posts,
    });
  } catch (error) {
    console.error("Error getting all posts:", error);
    res
      .status(500)
      .send({ success: false, message: "Failed to get all posts" });
  }
};


// get all post
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({})
      .populate("category")
      .select("-photo")
      .limit(12)
      .sort({ createdAt: -1 });

    res.status(200).send({
      success: true,
      countTotal: posts.length,
      message: "You get all posts",
      posts,
    });
  } catch (error) {
    console.error("Error getting all posts:", error);
    res
      .status(500)
      .send({ success: false, message: "Failed to get all posts" });
  }
};

// get photo
exports.getPostPhoto = async (req, res) => {
  try {
    const post = await Post.findById(req.params.pid).select("photo");
    if (post.photo.data) {
      res.set("Content-type", post.photo.contentType);
      res.status(200).send(post.photo.data);
    }
  } catch (error) {
    console.log("error");
    res.status(500).send({ success: false, message: "cant get photo man " });
  }
};
// delete post
exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await Post.findByIdAndDelete(id);

    res.status(200).send({
      success: true,
      success: true,
      message: "Post Deleted successfully ",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Oppssss" });
  }
};
exports.postFilter = async (req, res) => {
  try {
    const { checked, radio } = req.body;
    let args = {};
    if (checked.length > 0) args.category = checked;
    if (radio.length)
      args.price = {
        $gte: radio[0],
        $lte: radio[1],
      };

    const posts = await Post.find(args);
    res.status(200).send({
      success: true,
      countTotal: posts.length,
      message: "You get all posts",
      posts,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "OOOpss something went wrong" });
  }
};

// count post
exports.totalPostCount = async (req, res) => {
  try {
    const count = await Post.find({}).estimatedDocumentCount();
    res.status(200).send({
      success: true,
      count,
      message: "You get all posts",
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "OOOpss something went wrong" });
  }
};
// pagenation
exports.postPagination = async (req, res) => {
  try {
    const perPage = 6;
    const page = req.params.page ? req.params.page : 1;
    const posts = await Post.find({})
      .select("-photo")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .sort({ createdAt: -1 });

    res.status(200).send({
      success: true,
      countTotal: posts.length,
      message: "You get all posts",
      posts,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "OOOpss something went wrong" });
  }
};
// search by post
exports.SearchPostCtrl = async (req, res) => {
  try {
    const { keyword } = req.params;
    const results = await Post.find({
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
        { location: { $regex: keyword, $options: "i" } },
      ],
    }).select("-photo");
    res.json(results);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "OOOpss something went wrong" });
  }
};
// related Post

exports.relatedPost = async (req, res) => {
  try {
    const { pid, cid } = req.params;
    const posts = await Post.find({ category: cid, _id: { $ne: pid } })
      .limit(3)
      .select("-photo")
      .populate("category", "_id name");

    res.status(200).send({
      success: true,
      posts: posts,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ success: false, error: "Internal Server Error" });
  }
};
// getProduct By category
exports.getPostByCategory = async (req, res) => {
  try {
    const category = await Category.findOne({ slug: req.params.slug });
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
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};
// get plot post
