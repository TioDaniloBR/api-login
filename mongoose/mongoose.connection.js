const mongoose = require('mongoose');
mongoose.pluralize(null);

try{
    mongoose.connect(process.env.URL_BANCO,{useNewUrlParser: true, useUnifiedTopology: true});
}catch(error){
    console.log(error);
}

const connection = mongoose.connection;

module.exports = connection;