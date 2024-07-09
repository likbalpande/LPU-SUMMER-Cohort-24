require("dotenv").config();
require("./config/db.js");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("App is working...");
});

app.listen(process.env.PORT, () => {
    console.log(`------------ APP listening on port ${process.env.PORT} -------------`);
});
