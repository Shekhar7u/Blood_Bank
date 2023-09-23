const mongoose = require('mongoose')

const inventorySchema = new mongoose.Schema({
    inventoryType: {
        type: String,
        required: [true, 'inventory type required'],
        enum: ['in', 'out']

    },
    bloodGroup: {
        type: String,
        required: [true, 'blood group required'],
        enum: ['O+', 'O-', 'AB+', 'AB-', 'A+', 'A-', 'B+', 'B-', 'C+', 'C-']
    },
    quantity: {
        type: Number,
        required: [true, ' blood quantity required'],
    },
    organistaion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: [true, 'user is required'],
    }, hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: function () {
            return this.inventoryType === 'out'
        }

    },
    donar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: function () {
            return this.inventoryType === 'in'
        },
    },

}, { timestamps: true });
module.exports = mongoose.model('inventory', inventorySchema)