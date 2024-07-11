const UserModel = require("../model/userModel");
const bcrypt = require("bcrypt");

// const findExistingUserUsingEmail = async (email) => {
//     const user = await UserModel.findOne({ email });
//     return user;
// };

const signUp = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({
                status: "fail",
                message: "Email and password is required",
            });
            return;
        }
        // const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        // if (!EMAIL_REGEX.test(email)) {
        //     res.status(400).json({
        //         status: "fail",
        //         message: "Invalid Email",
        //     });
        //     return;
        // }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await UserModel.create({
            email,
            password: hashedPassword,
        });

        res.status(201).json({
            status: "success",
            message: "User created",
        });
    } catch (err) {
        if (err.code == "11000") {
            res.status(400).json({
                status: "fail",
                message: "Invalid Email or password",
            });
            return;
        }
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error",
        });
    }
};

const login = async (req, res) => {};

module.exports = {
    signUp,
};
