const express = require("express");
const uploadFileMulter = require("../config/uploadFileMulter");
const { createFile } = require("../controller/fileControllers.js");

const fileRouter = express.Router();

fileRouter.route("/").post(uploadFileMulter.single("file"), createFile);

module.exports = fileRouter;
