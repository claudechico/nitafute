const express = require("express");
const {
  categoryController,
  updateCategory,
  getAllCategory,
  getSingleCategory,
  deleteCategory,
  getPlotPost,
  geHousetPost,
  getFrameList,
} = require("../controller/categoryController");
const router = express.Router();
// routes
router.post("/create-category", categoryController);
// update Category
router.put("/update-category/:id", updateCategory);
// get all category
router.get("/all-category", getAllCategory);
// get single Category
router.get("/single-category/:slug", getSingleCategory);
// delete category
// get Plot category
router.get('/get-Plot', getPlotPost)
router.get('/get-house',geHousetPost)
router.delete("/delete-category/:id",deleteCategory);
router.get('/get-frame',getFrameList)

module.exports = router;
