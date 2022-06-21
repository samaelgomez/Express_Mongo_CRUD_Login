const express = require('express');
const { loggedAuthRouter } = require('../../auth/router');
const movieRouter = express.Router();
const { createMovie, findAllMovies, findMovie, updateMovie, deleteMovie, like, unlike } = require("./movie.model");

loggedAuthRouter.post('/createMovie', async function(req, res) {
    const result = await createMovie(req.body);
    res.send(result);
});

movieRouter.post('/findAllMovies', async function(req, res) {
    const result = await findAllMovies();
    res.send(result);
});

movieRouter.post('/findMovie', async function(req, res) {
    const result = await findMovie(req.body.movieData);
    res.send(result);
});

loggedAuthRouter.post('/updateMovie', async function(req, res) {
    const result = await updateMovie(req.body);
    res.send(result);
});

loggedAuthRouter.post('/deleteMovie', async function(req, res) {
    const result = await deleteMovie(req.body);
    res.send(result);
});

loggedAuthRouter.post('/like', async function(req, res) {
    const result = await like(req.body);
    res.send(result);
});

loggedAuthRouter.post('/unlike', async function(req, res) {
    const result = await unlike(req.body);
    res.send(result);
});

module.exports = movieRouter;