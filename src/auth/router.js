const express = require('express');
const { decrypt } = require('../utils');
const { login } = require(".");
const authRouter = express.Router();

authRouter.use((req, res, next) => {
    const token = req.get("Authorization");
    const username = req.body;
    console.log(token);
    if (typeof token != "string") {
        throw "Invalid token.";
    }
    const decryptedData = decrypt(token);
    console.log({"decryptedUsername":decryptedData.username, "currentUsername":username.username});
    if (decryptedData.username !== username.username) {
        throw "Incorrect user.";
    }
    next();
})

authRouter.post('/login', async function(req, res) {
    const result = await login(req.body);
    console.log({msg: "ok", token: result})
    res.send("Login correcto");
});

authRouter.post('/test', async function(req, res) {
    try {
        res.send('hola');
    } catch (error) {
        console.log(error);
    }
});

module.exports = authRouter;