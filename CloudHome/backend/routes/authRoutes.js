const express = require("express");
const { signup } = require("../controller/authControllers.js");

const authRouter = express.Router();

authRouter.post("/signup", signup);

module.exports = authRouter;
