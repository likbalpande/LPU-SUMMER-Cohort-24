require("dotenv").config();
require("./config/db.js");
const express = require("express");
const productRouter = require("./routes/productRoutes.js");

const app = express();
app.use(express.json());

app.use("/api/v1/products", productRouter);

app.listen(process.env.PORT, () => {
    console.log(`---------- Server Started : ${process.env.PORT} ----------`);
});
