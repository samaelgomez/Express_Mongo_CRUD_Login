const express = require('express');
const {authRouter, loggedAuthRouter} = require('./auth/router');
const userRouter = require("./User/model/router");
const movieRouter = require("./Movie/model/router");
const router = express.Router();

router.use(authRouter);
router.use(userRouter);
router.use(movieRouter);
router.use(loggedAuthRouter);

module.exports = router;