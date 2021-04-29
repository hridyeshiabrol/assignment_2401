const mongoose=require('mongoose')

const collegeSchema = mongoose.Schema({
    collegid:String,
    name:String,
    yearfounded:String,
    city:String,
    state:String,
    country:String,
    studentnumber:String,
    courses:String,
})

module.exports = mongoose.model('College',collegeSchema)
