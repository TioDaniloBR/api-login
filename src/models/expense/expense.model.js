const mongoose = require('../../../mongoose/mongoose.connection');
const {Schema} = require('mongoose');

const ExpenseSchema = Schema({
    description: {type: String},
    value: {type: String, required:true},
    date: {type: Date, required: true},
    processed: {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now},
    owner: {type: String, required:true}
});

module.exports = mongoose.model('income',ExpenseSchema);