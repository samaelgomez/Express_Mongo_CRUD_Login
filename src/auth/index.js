const {encrypt} = require("../utils.js");

async function login(userData) {
    const token = encrypt(userData);
    console.log(userData);
    console.log(token);
    return token;
}

async function logout(userData) {
    const token = encrypt(userData, 1);
    console.log(token);
    return token;
}

module.exports = {login, logout};