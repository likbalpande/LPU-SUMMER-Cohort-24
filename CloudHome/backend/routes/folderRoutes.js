const express = require("express");
const { createFolder } = require("../controller/folderControllers.js");

const folderRouter = express.Router();

folderRouter.post("/create", createFolder);

module.exports = folderRouter;
