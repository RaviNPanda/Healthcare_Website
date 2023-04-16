const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },  
    degree:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    dates:[
        {
            time:{
                type: String,
                required:true
            }
        }
    ]
});
//generating token


const Doctor = mongoose.model('DOCTOR',doctorSchema)

module.exports = Doctor;