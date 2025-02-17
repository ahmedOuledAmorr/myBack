const Product = require("../model/posts");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { Types } = require("mongoose");
const { sendError, sendSuccess } = require("../utils/helper");
const bodyParser = require("body-parser");

exports.createProduct = async (req, res) => {
  try {
    const userId = new Types.ObjectId(req.headers["user-id"]);
    if (!userId) {
      return res
        .status(400)
        .json({ error: "User ID not available in headers" });
    }
    const { name, description, price, location } = req.body;
    const image = req.files["image"] ? req.files["image"][0].path : "";
    const video = req.files["video"] ? req.files["video"][0].path : "";

    const newProduct = new Product({
      user: userId,
      name,
      description,
      price,
      location,
      image,
      video,
      active: true,
    });

    await newProduct.save();
    return res.status(201).json({ message: "Product created successfully" });
  } catch (error) {
    console.error("Error creating product:", error);
    return res.status(500).json({ error: "Failed to create product" });
  }
};

// exports.createProduct = async (req, res) => {
//   try {
//     const userId = new Types.ObjectId(req.headers["user-id"]);
//     if (!userId) {
//       return res
//         .status(400)
//         .json({ error: "User ID not available in headers" });
//     }
//     const { name, description, price, location } = req.body; // Remove createdAt
//     const image = req.file ? req.file.path : "";
//     console.log("req.file:", req.file);
//     console.log("image:", image);

//     const newProduct = new Product({
//       user: userId,
//       name,
//       description,
//       price,
//       location,
//       image,
//       active: true,
//     });

//     console.log("newProduct:", newProduct);
//     await newProduct.save();
//     return res.status(201).json({ message: "Product created successfully" });
//   } catch (error) {
//     console.error("Error creating product:", error);
//     return res.status(500).json({ error: "Failed to create product" });
//   }
// };

/*
exports.createProduct = async (req, res) => {
  try {
    const userId = new Types.ObjectId(req.headers['user-id']);
    if (!userId) {
      return sendError(res, 'User ID not available in headers');
    }
    const { name, description, price, location, createdAt } = req.body;
    upload(req, res, async (err) => {
      if (err) {
        return sendError(res, err.message || 'Failed to upload image');
      }
      const imgUrl = req.file ? req.file.path : '';
      const newProduct = new Product({
        user: userId, 
        name,
        description,
        price,
        location,
        createdAt, 
        imgUrl,
        active: true 
      });

      await newProduct.save();

      return sendSuccess(res, 'Product created successfully');
    });
  } catch (error) {
    console.error('Error creating product:', error);
    return (res, 'Failed to create product');
  }
};
*/
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (!products || products.length === 0) {
      return res.status(404).json({ error: "No products found" });
    }

    // Map through products array to modify image paths
    const modifiedProducts = products.map((product) => {
      const imagePath = `\\${path.basename(product.image)}`;
      const videoPath = product.video
        ? `\\${path.basename(product.video)}`
        : "";

      return {
        ...product._doc,
        image: imagePath,
        video: videoPath,
      };
    });

    return res.status(200).json({
      message: "Products retrieved successfully",
      products: modifiedProducts,
    });
  } catch (error) {
    console.error("Error retrieving products:", error);
    return res.status(500).json({ error: "Failed to retrieve products" });
  }
};
exports.getProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const userId = new Types.ObjectId(req.headers["user-id"]);
    const product = await Product.findOne({ _id: productId, user: userId });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    return res
      .status(200)
      .json({ message: "Product retrieved successfully", product });
  } catch (error) {
    console.error("Error retrieving product:", error);
    return res.status(500).json({ error: "Failed to retrieve product" });
  }
};

exports.getProductsByUser = async (req, res) => {
  try {
    const userId = req.headers["user-id"];
    const products = await Product.find({ user: userId });
    if (!products || products.length === 0) {
      return res.status(404).json({ error: "No products found for this user" });
    }
    // Map through products array to modify image paths
    const modifiedProducts = products.map((product) => {
      const imagePath = `\\${path.basename(product.image)}`;
      const videoPath = product.video
        ? `\\${path.basename(product.video)}`
        : "";

      return {
        ...product._doc,
        image: imagePath,
        video: videoPath,
      };
    });
    return res.status(200).json({
      message: "Products retrieved successfully",
      products: modifiedProducts,
    });
  } catch (error) {
    console.error("Error retrieving products:", error);
    return res.status(500).json({ error: "Failed to retrieve products" });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const userId = new Types.ObjectId(req.headers["user-id"]);
    const { name, description, price, location, createdAt } = req.body;

    const product = await Product.findOne({ _id: productId, user: userId });
    if (!product) {
      return res
        .status(404)
        .json({ error: "Product not found or user not authorized to update" });
    }

    if (name) product.name = name;
    if (description) product.description = description;
    if (price) product.price = price;
    if (location) product.location = location;
    if (createdAt) product.createdAt = createdAt;

    if (req.files["image"]) {
      product.image = req.files["image"][0].path;
    }
    if (req.files["video"]) {
      product.video = req.files["video"][0].path;
    }

    const updatedProduct = await product.save();

    return res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).json({ error: "Failed to update product" });
  }
};

// exports.updateProduct = async (req, res) => {
//   try {
//     const productId = req.params.id;
//     const { name, description, price, location, createdAt } = req.body;
//     const userId = new Types.ObjectId(req.headers["user-id"]);
//     const updatedProduct = await Product.findOneAndUpdate(
//       { _id: productId, user: userId },
//       { name, description, price, location, createdAt },
//       { new: true }
//     );
//     if (!updatedProduct) {
//       return res
//         .status(404)
//         .json({ error: "Product not found or user not authorized to update" });
//     }
//     return res.status(200).json({
//       message: "Product updated successfully",
//       product: updatedProduct,
//     });
//   } catch (error) {
//     console.error("Error updating product:", error);
//     return res.status(500).json({ error: "Failed to update product" });
//   }
// };

exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const userId = req.headers["user-id"];
    const deletedProduct = await Product.findOneAndDelete({
      _id: productId,
      user: userId,
    });
    if (!deletedProduct) {
      return res
        .status(404)
        .json({ error: "Product not found or user not authorized to delete" });
    }
    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    return res.status(500).json({ error: "Failed to delete product" });
  }
};

exports.getImage = (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, "../uploads", filename);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).json({ error: "Image not found" });
    }
    res.sendFile(filePath);
  });
};

exports.updateProductActive = async (req, res) => {
  try {
    const productId = req.params.id;
    const { active } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    product.active = active;
    const updatedProduct = await product.save();

    return res.status(200).json({
      message: "Product active status updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.error("Error updating product active status:", error);
    return res
      .status(500)
      .json({ error: "Failed to update product active status" });
  }
};
