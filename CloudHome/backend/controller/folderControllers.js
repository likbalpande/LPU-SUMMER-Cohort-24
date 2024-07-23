const FileFolderModel = require("../model/fileSchema");

const createFolder = async (req, res) => {
    try {
        const { name, parentId } = req.body;
        const { _id } = req.user;

        const isFileNameExists = await FileFolderModel.findOne({
            name,
            userId: _id,
            parentId,
        });

        if (isFileNameExists) {
            res.status(400);
            res.json({ status: "fail", message: "Folder name already exists" });
            return;
        }

        const newFolder = await FileFolderModel.create({
            name,
            userId: _id,
            type: "folder",
            parentId,
        });

        res.status(201);
        res.json({ status: "success", message: "Folder created" });
    } catch (err) {
        console.error("--------------------");
        console.log(err);
        console.error("--------------------");
        res.status(500).json({ status: "fail", message: "Internal Server Error" });
    }
};

module.exports = {
    createFolder,
};
