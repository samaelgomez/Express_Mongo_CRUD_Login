const express = require('express');
const { decrypt } = require('../utils');
const { login, logout } = require(".");
const authRouter = express.Router();
const loggedAuthRouter = express.Router();

loggedAuthRouter.use((req, res, next) => {
    const token = req.get("Authorization");
    const currentUser = req.body.currentUser;
    console.log(token);
    if (typeof token != "string") {
        throw "Invalid token.";
    }
    const decryptedData = decrypt(token);
    console.log({"decryptedUsername":decryptedData, "currentUser":currentUser});
    if (decryptedData.username != currentUser.username) {
        console.log(decryptedData.username + ", " + currentUser.username);
        throw "Incorrect user.";
    }
    next();
})

authRouter.post('/login', async function(req, res) {
    const result = await login(req.body);
    console.log({msg: "ok", token: result})
    res.send(result);
});

authRouter.post('/logout', async function(req, res) {
    const result = await logout(req.body);
    console.log({msg: "ok", token: result})
    res.send(result);
});

module.exports = {authRouter, loggedAuthRouter};