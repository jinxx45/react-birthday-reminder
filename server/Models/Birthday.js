var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var birthdaySchema = new Schema({
    name : {
        require : true , 
        type : String , 
    },
    image : {
        require : true , 
        type : String ,
    }
})

const birthday = mongoose.model('birthday' , birthdaySchema)

export default birthday;