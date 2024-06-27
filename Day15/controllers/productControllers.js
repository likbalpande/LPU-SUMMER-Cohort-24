const { productsCollection } = require("../config/db.js");

const getProducts = async (req, res) => {
    const products = await productsCollection.find().toArray();
    res.send({
        status: "success",
        data: {
            // products: products,
            products,
        },
    });
};

const createProduct = async (req, res) => {
    const body = req.body;
    // validation --> error
    const newProduct = await productsCollection.insertOne(body);
    res.json({
        status: "success",
        data: {
            product: newProduct,
        },
    });
};

module.exports = {
    getProducts,
    createProduct,
};
