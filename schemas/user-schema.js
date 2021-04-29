const mongoose=require('mongoose')

const userSchema = mongoose.Schema({
    studentid:String,
    name:String,
    yearofbatch:String,
    collegid:String,
    skills:String
})

module.exports = mongoose.model('Student',userSchema)
