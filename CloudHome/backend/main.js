require("dotenv").config();
require("./config/db.js");
const authRouter = require("./routes/authRoutes.js");
const otpRouter = require("./routes/otpRoutes.js");
const folderRouter = require("./routes/folderRoutes.js");
const fileFolderRouter = require("./routes/fileFolderRoutes.js");
const express = require("express");
const cors = require("cors");
const verifyToken = require("./middlewares/verifyToken.js");
const fileRouter = require("./routes/fileRoutes.js");

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("App is running...");
});

app.use("/api/v1/auth", authRouter);

app.use(verifyToken);

app.use("/api/v1/otp", otpRouter);
app.use("/api/v1/folder", folderRouter);
app.use("/api/v1/file", fileRouter);
app.use("/api/v1/file-folder", fileFolderRouter);

app.listen(process.env.PORT, () => {
    console.log("------------- App listening on port " + process.env.PORT + " ------------");
});
