require("dotenv").config();
require("./config/db.js");
const authRouter = require("./routes/authRoutes.js");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("App is running...");
});

app.use("/api/v1/auth", authRouter);

app.listen(process.env.PORT, () => {
    console.log("------------- App listening on port " + process.env.PORT + " ------------");
});
