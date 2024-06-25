const express = require("express");
const {
    getProducts,
    createProduct,
    replaceProduct,
    deleteProduct,
    updateProduct,
    validateForTitleAndPrice,
} = require("../controllers/productControllers.js");

const productRouter = express.Router();

productRouter.route("/").get(getProducts).post(validateForTitleAndPrice, createProduct);

productRouter.route("/:id").put(validateForTitleAndPrice, replaceProduct).patch(updateProduct).delete(deleteProduct);

module.exports = productRouter;
