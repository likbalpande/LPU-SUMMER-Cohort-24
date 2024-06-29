const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     price: {
//         type: Number,
//         required: true,
//     },
//     thumbnail: {
//         type: String,
//     },
//     images: [],
//     description: String,
//     metaData: {},
//     createdAt: {
//         type: Date,
//         default: Date.now(),
//     },
//     updatedAt: {
//         type: Date,
//         default: Date.now(),
//     },
// });

const productSchema = new mongoose.Schema({
    pizza_name: String,
    pizza_category: String,
    pizza_size: String,
    total_price: Number,
});

const productModel = mongoose.model("pizzas", productSchema);

module.exports = productModel;
