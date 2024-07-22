const nodemailer = require("nodemailer");
const OtpModel = require("../model/otpSchema");
const UserModel = require("../model/userModel");

const sendOTPMail = async (email, otp) => {
    try {
        let mailer = nodemailer.createTransport({
            service: "gmail",
            secure: true,
            port: 465,
            auth: {
                user: process.env.NODEMAILER_MAIL_USER,
                pass: process.env.NODEMAILER_MAIL_PASS,
            },
        });

        const response = await mailer.sendMail({
            from: "abcd", // likhilesh@<home.cloud.app>
            to: email,
            subject: "OTP", // OTP verification for your account
            html: `
                <html>
                    <body>
                        <h1> Your OTP for Cloud Home APP is </h1>
                        <h1> ${otp} </h1>
                    </body>
                </html>
            `,
        });

        console.log(response);

        return true;
    } catch (err) {
        console.log("--------------------------------");
        console.log(err);
        console.log("--------------------------------");

        return false;
    }
};

const generateOtp = async (req, res) => {
    try {
        const { email, _id } = req.user;
        const restrictedTimeForOTP = 10 * 60 * 1000;

        const sentOTPMail = await OtpModel.findOne({
            email,
            createdAt: {
                $gte: Date.now() - restrictedTimeForOTP,
            },
        });
        if (sentOTPMail) {
            res.status(200);
            res.json({
                status: "success",
                message: `Otp is already is sent to ${email}`,
                data: {
                    createdAt: sentOTPMail.createdAt,
                },
            });
            return;
        }

        const randomOTP = Math.floor(Math.random() * 9000 + 1000);

        const isMailSent = await sendOTPMail(email, randomOTP);

        if (!isMailSent) {
            res.status(500);
            res.json({
                status: "Fail",
                message: `Otp NOT sent to ${email}`,
                data: {},
            });
            return;
        }

        await OtpModel.create({
            otp: randomOTP,
            email,
            userId: _id,
        });

        res.status(201);
        res.json({
            status: "success",
            message: `Otp sent to ${email}`,
            data: {},
        });
    } catch (err) {
        console.log("----------------------------");
        console.log(err);
        console.log("----------------------------");
        res.status(500).json({
            status: "fail",
            message: "Internal Server Error",
            data: err,
        });
    }
};

const verifyOtp = async (req, res) => {
    try {
        const { otp } = req.body;

        console.log("\n✅ : otp:", otp);

        const { email } = req.user;

        const restrictedTimeForOTP = 10 * 60 * 1000; // milliseconds

        const sentOTPMail = await OtpModel.findOne({
            email,
            createdAt: {
                $gte: Date.now() - restrictedTimeForOTP,
            },
        });

        console.log("\n✅ : sentOTPMail:", sentOTPMail);

        if (!sentOTPMail) {
            res.status(404);
            res.json({
                status: "fail",
                message: "Verification failed. Please generate new OTP!",
            });
            return;
        }

        const hashedOtp = sentOTPMail.otp;
        const isCorrect = await sentOTPMail.verifyOtp(otp + "", hashedOtp);

        if (!isCorrect) {
            res.status(400);
            res.json({
                status: "fail",
                message: "Incorrect OTP!",
            });
            return;
        }

        await UserModel.findOneAndUpdate({ email }, { isEmailVerified: true });

        res.status(200);
        res.json({
            status: "success",
            message: "Verification successful",
            data: {},
        });
    } catch (err) {
        console.log("------------------------");
        console.log(err);
        console.log("------------------------");
        res.status(500);
        res.json({
            status: "fail",
            message: "Internal Server Error",
        });
    }
};

module.exports = { generateOtp, verifyOtp };
