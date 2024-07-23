const express = require("express");
const { getFileFolders } = require("../controller/fileFolderControllers");

const fileFolderRouter = express.Router();

fileFolderRouter.route("/").get(getFileFolders);

module.exports = fileFolderRouter;
