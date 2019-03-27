const mongoose = require('mongoose')

// Data format
const adminSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    contactNumber: String,
    sessions: []
})

module.exports = mongoose.model('Admin', adminSchema)