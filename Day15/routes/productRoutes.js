const express = require("express");
const { getProducts, createProduct } = require("../controllers/productControllers");

const productRouter = express.Router();

productRouter.route("/").get(getProducts).post(createProduct);

module.exports = productRouter;
