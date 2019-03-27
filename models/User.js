const mongoose = require('mongoose')

// Data format
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    contact: {
        email: String,
        contactNumber: String
    },
    personalAttribute: {
        firstName: String,
        lastName: String,
        dob: Date,
        gender: String,
        height: Number,
        weightLog: [Number],
        goalWeight: Number,
        bodyFatLog: [Number],
        goalBodyFat: Number,
        fatMass: [Number],
        leanMass: [Number],
        goal: String
    },
    notes: String,
    image: String,
    transactionalHistory: [
        {
            date: Date,
            amountReceived: Number,
            pricePerSession: Number,
            totalSessions: Number
        }
    ],
    sessions: [],
    dietaryRequirements: String,
    mealPlans: []
})

module.exports = mongoose.model('User', userSchema)