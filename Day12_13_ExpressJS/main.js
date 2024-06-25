const express = require("express");
const {
    getProducts,
    createProduct,
    replaceProduct,
    deleteProduct,
    updateProduct,
} = require("./controllers/productControllers.js");

const app = express();
app.use(express.json());

app.route("/products").get(getProducts).post(createProduct);

app.route("/products/:id").put(replaceProduct).patch(updateProduct).delete(deleteProduct);

app.listen(1400);
