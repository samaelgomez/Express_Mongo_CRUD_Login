const {encrypt} = require("../utils.js");

async function login(userData) {
    const token = encrypt(userData);
    return token;
}

module.exports = {login};