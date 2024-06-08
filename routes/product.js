const express = require("express");
const router = express.Router();
const { upload } = require("../middlewares/upload");
const {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getProductsByUser,
  getAllProducts,
  getImage, // Add this line
  updateProductActive, // Import the new function
} = require("../controller/posts");
const { validateProduct } = require("../middlewares/validator");
const bodyParser = require("body-parser");

router.post("/createProduct", upload, validateProduct, createProduct);
router.get("/getAllProducts", getAllProducts);
router.get("/getProduct/:id", getProduct);

router.get("/getProductsByUser", getProductsByUser);
router.get("/image/:filename", getImage); // Add this route

router.put(
  "/updateProduct/:id",
  bodyParser.json(),
  upload,
  validateProduct,
  updateProduct
);
// Add the new route
router.put("/updateProductActive/:id", bodyParser.json(), updateProductActive);

router.delete("/deleteProduct/:id", deleteProduct);

module.exports = router;
