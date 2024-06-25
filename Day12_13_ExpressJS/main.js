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

app.get("/products", getProducts);
app.post("/products", createProduct);

app.put("/products/:id", replaceProduct);
app.delete("/products/:id", deleteProduct);
app.patch("/products/:id", updateProduct);

app.listen(1400);
