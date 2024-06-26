require("dotenv").config();
const { productsCollection } = require("./database/db.js");
const { getProduct, createProduct } = require("./controllers/productControllers.js");

const express = require("express");

const app = express();
app.use(express.json());

app.get("/products", getProduct);

app.post("/products", createProduct);

app.listen(process.env.PORT, () => {
    console.log(`----------- App started on : ${process.env.PORT} -------------`);
});
