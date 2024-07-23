const FileFolderModel = require("../model/fileSchema");

const getFileFolders = async (req, res) => {
    try {
        const { _id } = req.user;
        const { parentId } = req.body;

        const fileFolders = await FileFolderModel.find({ userId: _id, parentId });

        res.status(200).json({
            status: "success",
            data: {
                fileFolders,
            },
        });
    } catch (err) {
        console.log("----------------");
        console.log(err);
        console.log("----------------");
        res.status(500).json({ status: "fail", message: "Internal Server Error" });
    }
};

module.exports = { getFileFolders };
