import jwt from 'jsonwebtoken';

export default function isAuthenticated(req, res, next) {
    const token = req.headers.authorization;
    console.log(token);
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized",
            success: false
        });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.log(err);
            return res.status(401).json({
                message: "Unauthorized",
                success: false
            });
        }
        console.log(decoded);
        req.user = decoded;
        next();
    }
    );
};