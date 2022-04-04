const {encrypt, decrypt} = require("../utils.js");

async function login(userData) {
    const token = encrypt(userData);
    return token;
}

async function verify(token, userData) {
    const decryptedData = decrypt(token);
    console.log({decryptedData, userData});
}   

module.exports = {login, verify};