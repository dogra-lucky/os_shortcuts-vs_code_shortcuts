const mongoose = require('mongoose')
require('dotenv').config();
const dbURI = process.env.DB_HOST;

mongoose.set('strictQuery', true);
mongoose.connect(dbURI, {useNewUrlParser:true})
// connect to database
const db = mongoose.connection
// if error
db.on("error", (err) => {
    console.error(`err: ${err}`)
})// if connected
db.on('connected', (err, res) => {
    console.log('Connected to database')
})

module.exports = db;