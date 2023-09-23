const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    role: {
        type: 'string',
        required: [true, 'role is required'],
        enum: ['admin', 'organisation', 'donar', 'hospital']
    },
    name: {
        type: 'string',
        required: function () {
            if (this.role === 'admin' || this.role === 'user') {
                return true
            } return false
        }
    },
    organisationName: {
        type: 'string',
        required: function () {
            if (this.role === 'organisation') {
                return true
            } return false
        }
    },
    hospitalName: {
        type: 'string',
        required: function () {
            if (this.role === 'hospital') {
                return true
            } return false
        },
    },
    email: {
        type: 'string',
        require: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: 'string',
        require: [true, 'Password is required'],

    },
    website: {
        typeof: 'string',
    },
    address: {
        type: 'string',
        require: [true, 'Address is required'],
    },
    phone: {
        type: 'string',
        require: [true, 'Phone is required'],
    },
}, { timestamps: true });

module.exports = mongoose.model('users', userSchema)