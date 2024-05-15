const jwt = require('jsonwebtoken');

const VerifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "No token provided, unauthorized"
        });
    }

    const token = authHeader.split(' ')[1];
    jwt.verify(token, 'bazmaSecretKey', (error, decoded) => {
        if (error) {
            return res.status(403).json({
                message: "Invalid Token"
            });
        }
        req.user = decoded;
        return next(); 
    });
};

module.exports = VerifyToken;
