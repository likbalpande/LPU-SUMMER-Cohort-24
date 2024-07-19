const express = require("express");
const { generateOtp } = require("../controller/otpControllers");

const otpRouter = express.Router();

otpRouter.get("/generate", generateOtp);

module.exports = otpRouter;
