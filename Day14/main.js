require("dotenv").config();

const express = require("express");
const productRouter = require("./routes/productRoutes.js");

const app = express();
app.use(express.json());

app.use("/products", productRouter);

app.listen(process.env.PORT, () => {
    console.log(`----------- App started on : ${process.env.PORT} -------------`);
});
