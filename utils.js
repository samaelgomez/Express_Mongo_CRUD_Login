const JWT = require('jsonwebtoken')
const JWT_HEADER = process.env.JWT_HEADER

async function encrypt(payload) {
    const token = await JWT.sign(payload, JWT_HEADER, {
        expiresIn: 1440
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