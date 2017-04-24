const mongoose = require('mongoose')
//Será descontinuado 
mongoose.Promise = global.Promise

module.exports  = mongoose.connect('mongodb://localhost/mymoney')


