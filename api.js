require('dotenv').config()
const express = require('express')
const app = new express()
const mongoose = require('mongoose')
const db = mongoose.connection
const cors = require('cors')
const passport = require('passport')
const bodyParser = require('body-parser')

const port = 5000

// Connecting to MongoDB
mongoose.connect(process.env.MLAB_URL)

db.on('error', () => {
    console.log('Failed to connect to mongoDB')
})

db.once('open', () => {
    console.log('Connected to mongoDB')
})

// Body parser
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

// Fills in the correct headers to allow access 
app.use(cors({
    credentials: true,
    origin: process.env.REQUEST_ORIGIN
}))

// User passport's middleware
app.use(passport.initialize())
app.use(passport.session())

// Looks for the index.js in the controllers folder
app.use(require('./controllers'))

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})