const express = require("express");

const router = express.Router();
const {
  createPost,
  updatePost,
  getAllPosts,
  getSinglePost,
  getPostPhoto,
  deletePost,
  postFilter,
  totalPostCount,
  postPagination,
  SearchPostCtrl,
  relatedPost,
  getPostByCategory,
  getPostByUser,
} = require("../controller/postController");
const { requireSignIn } = require("../middleware/authMid");
// create post
router.post("/create-post",  requireSignIn,createPost, (req, res) => {
  res.send("karibu matemu wanguu");
});
// post
router.put("/update-post/:pid", requireSignIn, updatePost);
router.get("/get-singlePost/:slug", getSinglePost);
router.get("/all-post", getAllPosts);
router.get("/get-photo/:pid", getPostPhoto);
router.delete("/delete-post/:id", deletePost);
router.post("/post-filters", postFilter);
// count post

router.get("/post-count", totalPostCount);
// pagenation
router.get("/get-page/:page", postPagination);

//search post
router.get("/search/:keyword", SearchPostCtrl);
// related post
router.get("/relate-post/:pid/:cid", relatedPost);
// display Post by user
router.get("/postByuser/:id", getPostByUser);
router.get("/get-ByCategory/:slug", getPostByCategory);
// get all post belongs to category
router.get('/all-category', )
module.exports = router;
