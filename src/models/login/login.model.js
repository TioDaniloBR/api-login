const mongoose = require('../../../mongoose/mongoose.connection');
const {Schema} = require('mongoose');

const LoginSchema = Schema({
    name: {type: String, required: true},
    username: {type: String, unique:true},
    email: {type: String, unique: true},
    password: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    lastLogin: {type: Date}
});

module.exports = mongoose.model('login',LoginSchema);