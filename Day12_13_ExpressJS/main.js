const express = require("express");
var morgan = require("morgan");
const productRouter = require("./routes/productRoutes.js");

const app = express();

// internal middleware
app.use(express.json());

// custom middleware
app.use((req, res, next) => {
    res.set({ "server-time": Date.now() });
    console.log("🟢", req.url, req.method);
    next();
});

// external middleware
app.use(morgan("dev"));

app.use("/products", productRouter);

app.listen(1400);
