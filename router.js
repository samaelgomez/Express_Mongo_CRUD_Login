const express = require('express');
const authRouter = require('./auth/router');
const router = express.Router();

router.use(authRouter);

router.post('/hola', function(req, res) {
    console.log(req.body);
    res.send("Correcto");
});

module.exports = router;