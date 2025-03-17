const jwt = require('jsonwebtoken');
const dotenv = require("dotenv")

dotenv.config()


const verify = (roles) => {
    return (req, res, next) => {
        try {
            const authHeader = req.headers.authorization
            if(!authHeader) {
                return res.status(401).json({
                    message: "Token is required"
                });
            }

            const token = authHeader.split(" ")[1]

            const decoded = jwt.verify(token, process.env.SECRET_KEY)

            if(!roles.includes(decoded.role)) {
                
            }
        } catch (error) {
            
        }
    }
}