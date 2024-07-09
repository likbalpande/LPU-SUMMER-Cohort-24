const { signUp } = require("../controller/authController.js");
const express = require("express");

const authRouter = express.Router();

authRouter.route("/signup").post(signUp);

module.exports = authRouter;
