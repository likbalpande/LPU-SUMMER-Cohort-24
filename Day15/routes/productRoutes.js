const express = require("express");
const { getProducts, createProduct, replaceProduct } = require("../controllers/productControllers");

const productRouter = express.Router();

productRouter.route("/").get(getProducts).post(createProduct);

productRouter.route("/:id").put(replaceProduct);

module.exports = productRouter;
