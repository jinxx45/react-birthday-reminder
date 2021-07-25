var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var birthdaySchema = new Schema({
    name :{
        require:true,
        type : String,
    },
    image :{
        type :String,
        require:true
    },
    date :{
        type : String,
        require : true,
    }
})

module.exports = mongoose.model('Birthday',birthdaySchema)
