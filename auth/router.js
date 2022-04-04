const express = require('express');
const authRouter = express.Router();
const {login, verify} = require("./")

authRouter.post('/login', async function(req, res) {
    const result = await login(req.body);
    console.log({msg: "ok", token: result})
    res.send("Login correcto");
});

authRouter.post('/verify', async function(req, res) {
    try {
        const result = await verify(req.get("Authorization"), req.body);
        res.send(result);
    } catch (error) {
        console.log(error);
    }
});

module.exports = authRouter;