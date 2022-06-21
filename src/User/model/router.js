const express = require('express');
const { loggedAuthRouter } = require('../../auth/router');
const userRouter = express.Router();
const { createUser, findAllUsers, findUser, updateUser, deleteUser } = require("./user.model");

userRouter.post('/createUser', async function(req, res) {
    const result = await createUser(req.body.userData);
    res.send(result);
});

userRouter.post('/findAllUsers', async function(req, res) {
    const result = await findAllUsers();
    res.send(result);
});

userRouter.post('/findUser', async function(req, res) {
    const result = await findUser(req.body.userData);
    res.send(result);
});

loggedAuthRouter.post('/updateUser', async function(req, res) {
    const result = await updateUser(req.body.userData);
    res.send(result);
});

loggedAuthRouter.post('/deleteUser', async function(req, res) {
    const result = await deleteUser(req.body.userData);
    res.send(result);
});

module.exports = userRouter;