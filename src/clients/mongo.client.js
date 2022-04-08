const mongoose = require('mongoose')
const dbURI = 'mongodb://localhost:27017/crud'

mongoose.connect(dbURI)
.then(() => {
  console.log("Database connected")
})