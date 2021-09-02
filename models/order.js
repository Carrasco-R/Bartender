const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    rocks: {
        type: Boolean,
        required: true
    },
    garnish: {
        type: String,
        required: true
    },
    rim: {
        type: String,
        required: true
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    ready: {
        type: Boolean,
        required: true
    }
}, {timestamps: true})

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;