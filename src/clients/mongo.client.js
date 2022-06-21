const mongoose = require('mongoose')
require('dotenv').config({path: "../variables.env"})
const dbURI = "mongodb://samael:samael@mongo:27017/crud?authSource=admin"

mongoose.connect(dbURI)
.then(() => {
  console.log("Database connected")
})