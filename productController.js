const Product = require('../models/productModel');

const createProduct = async (req, res, next) => {
  try {
    const { name, price, category, inStock } = req.body;
    if (!name || !price || !category) {
      throw new Error("Database Error");
    }
    const newProduct = new Product({ name, price, category, inStock });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    next(err);
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

module.exports = { createProduct, getAllProducts };
