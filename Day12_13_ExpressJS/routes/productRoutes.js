const express = require("express");
const {
    getProducts,
    createProduct,
    replaceProduct,
    deleteProduct,
    updateProduct,
    validateForTitleAndPrice,
    getDataMiddleware,
    validateID,
} = require("../controllers/productControllers.js");

const productRouter = express.Router();

productRouter.use(getDataMiddleware);

productRouter.route("/").get(getProducts).post(validateForTitleAndPrice, createProduct);

productRouter
    .route("/:id")
    .put(validateID, validateForTitleAndPrice, replaceProduct)
    .patch(validateID, updateProduct)
    .delete(validateID, deleteProduct);

module.exports = productRouter;
