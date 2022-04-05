const express = require('express')
const env = require('node-env-file');
env(__dirname + '/../.env');
const app = express()
const router = require("./router.js")
const port = process.env.PORT
// const db = require('./clients/mongo.client')

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})