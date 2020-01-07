
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.SECRET

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if(token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            if(err) {
                res.status(401).json({ message: 'You are not authorized'});
            } else {
                req.user = {
                    username: decodedToken.username,
                    score: decodedToken.score
                };
                next();
            }
        });
    } else {
        res.status(400).json({ message: 'No token provided'});
    }
};