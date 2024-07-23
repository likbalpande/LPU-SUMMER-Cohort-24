const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types;

const fileFolderSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        userId: {
            type: ObjectId,
            required: true,
            ref: "Users",
        },
        sharedWith: [
            {
                type: ObjectId,
                ref: "Users",
            },
        ],
        type: {
            type: String, // file, folder
            required: true,
        },
        link: String,
        parentId: {
            type: ObjectId,
            ref: "FileFolder",
        },
        children: [
            {
                type: ObjectId,
                ref: "FileFolder",
            },
        ],
        metaData: {
            type: Object,
        },
    },
    { timestamps: true }
);

const FileFolderModel = mongoose.model("FileFolder", fileFolderSchema);

module.exports = FileFolderModel;
