const express = require("express");
const { getProducts, createProduct, replaceProduct, checkId } = require("../controllers/productControllers");

const productRouter = express.Router();

productRouter.route("/").get(getProducts).post(createProduct);

productRouter.route("/:id").put(checkId, replaceProduct);

module.exports = productRouter;
