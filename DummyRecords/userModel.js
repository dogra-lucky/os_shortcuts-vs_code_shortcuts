const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userId: {
        type: String,trim: true,required: true,maxlength: 50
    },
    firstName: {
        type: String,trim: true,required: true,maxlength: 50
    },
    lastName: {
        type: String,trim: true,required: true,maxlength: 50
    },
    sex: {
        type: String,trim: true,required: true,maxlength: 50
    },
    email: {
        type: String,lowercase: true,trim: true,required: true
    },
    phone: {
        type: String,trim: true,required: true
    },
    dob: {
        type: String,required: true,maxlength:20
    },
    jobTitle: {
        type: String,required: true,maxlength:200
    }
})

module.exports = mongoose.model('User', UserSchema);