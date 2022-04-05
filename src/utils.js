const JWT = require('jsonwebtoken')
const JWT_HEADER = process.env.JWT_HEADER

function encrypt(payload, header = JWT_HEADER ? JWT_HEADER : "secret") {
    if (payload === undefined || payload.length === 0) {
        throw ("Payload is empty");
    }
    const token = JWT.sign(payload, header, {
        expiresIn: 900
    });
    return token
}

function decrypt(token) {
    const result = JWT.verify(token, JWT_HEADER)
    if (result.err) {
        console.log("Error decrypt")
        throw err;
    }
    console.log(result);
    return result;
}

module.exports = {encrypt, decrypt}