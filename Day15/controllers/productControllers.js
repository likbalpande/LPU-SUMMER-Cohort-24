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
        console.log(err);
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
    const products = await productModel.find({}).limit(10);
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

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        body.updatedAt = Date.now();
        const newProduct = await productModel.findOneAndUpdate({ _id: id }, body, {
            new: true,
        });
        res.status(200);
        res.json({
            status: "success",
            data: {
                product: newProduct,
            },
        });
    } catch (err) {
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error",
            info: err,
        });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await productModel.findByIdAndDelete(id);
        res.status(204);
        res.json({
            status: "success",
            data: {
                product: null,
            },
        });
    } catch (err) {
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error",
            info: err,
        });
    }
};

// const pizzasQuery = productModel.find({
//     title: {
//         $regex: q,
//     },
// });

// query from client --> price[$lte]=2499
// query at server --> { price: { '$lte': '2499' } }

const listProducts = async (req, res) => {
    const { limit = 10, q = "", fields = "", sort = "", page = 1, ...filters } = req.query;
    const selectionFields = fields.split("_").join(" ");
    const sortFields = sort.split("_").join(" ");
    let productsQuery = productModel.find(filters);
    // searching functionality
    productsQuery = productsQuery.where("title").regex(q);
    // reduce response size and select specific fields
    productsQuery = productsQuery.select(selectionFields);

    // count the total of result documents
    const countQuery = productsQuery.clone();
    const totalData = await countQuery.countDocuments();

    // sorting
    productsQuery = productsQuery.sort(sortFields);

    // pagination
    productsQuery = productsQuery.skip((page - 1) * limit);
    productsQuery = await productsQuery.limit(limit);

    res.json({
        status: "success",
        results: productsQuery.length,
        totalData: totalData,
        data: {
            pizzas: productsQuery,
        },
    });
};

module.exports = {
    getProducts,
    createProduct,
    replaceProduct,
    updateProduct,
    deleteProduct,
    listProducts,
    checkId,
};
