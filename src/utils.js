const JWT = require('jsonwebtoken')
const JWT_HEADER = process.env.JWT_HEADER

function encrypt(payload, tokenTime = 900, header = JWT_HEADER ? JWT_HEADER : "secret") {
    console.log(payload);
    if (payload === undefined || payload.length === 0) {
        throw new Error("Payload cannot be empty")
    }
    const token = JWT.sign(payload, header, {
        expiresIn: tokenTime
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