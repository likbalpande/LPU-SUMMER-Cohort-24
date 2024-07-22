const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        res.status(401).json({
            status: "fail",
            message: "Unauthorized",
            data: {},
        });
        return;
    }

    const token = authorization?.split(" ")?.[1];
    if (!token) {
        res.status(401).json({
            status: "fail",
            message: "Unauthorized",
            data: {},
        });
        return;
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            console.log(err);
            res.status(401).json({
                status: "fail",
                message: "Unauthorized",
                data: {},
            });
        } else {
            console.log(decoded);
            req.user = { email: decoded.data.email, _id: decoded.data._id };
            next();
        }
    });
};

module.exports = verifyToken;
