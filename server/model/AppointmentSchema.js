const mongoose = require('mongoose')
const moment = require('moment');
const AppointmentSchema = new mongoose.Schema({
    doctor_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },  
    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    time_of_meeting:{
        type: String,
        required:true
    },
    time_of_booking:{
        type: Date,
        default: new Date().getTime(),
        required:true
    }
});
//generating token


const Appointments = mongoose.model('Appointments',AppointmentSchema)

module.exports = Appointments;