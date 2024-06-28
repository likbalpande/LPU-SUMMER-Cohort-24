const productModel = require("../models/productModel.js");

const checkId = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await productModel.findById(id);
        if (!product) {
            res.status(404);
            res.json({
                status: "fail",
                message: "Product ID not found !",
            });
            return;
        }
        next();
    } catch (err) {
        if (err.name === "CastError") {
            res.status(400);
            res.json({
                status: "fail",
                message: "Invalid product ID !",
            });
            return;
        }
        res.status(500);
        res.json({
            status: "fail",
            err: "Internal Server Error",
        });
    }
};

const getProducts = async (req, res) => {
    const products = await productModel.find({});
    res.send({
        status: "success",
        data: {
            products,
        },
    });
};

const createProduct = async (req, res) => {
    try {
        const body = req.body;
        const newProduct = await productModel.create(body);
        res.status(201);
        res.json({
            status: "success",
            data: {
                product: newProduct,
            },
        });
    } catch (err) {
        console.log(err);
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error",
            info: err,
        });
    }
};

const replaceProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        const newProduct = await productModel.findOneAndReplace({ _id: id }, body, { new: true });
        res.json({
            status: "success",
            data: {
                product: newProduct,
            },
        });
    } catch (err) {
        console.log(err);
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error",
            info: err,
        });
    }
};

module.exports = {
    getProducts,
    createProduct,
    replaceProduct,
    checkId,
};
