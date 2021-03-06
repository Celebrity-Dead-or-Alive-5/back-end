
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.SECRET || 'willy wonkas wonkalicious wonks'

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if(token) {
        console.log(token);
        jwt.verify(token, secret, (err, decodedToken) => {
            if(err) {
                console.log(err);
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