const express = require("express");
const router = express.Router();
const User = require("../model/userSchema");
const Doctor = require("../model/DoctorsSchema");
const Appointments = require("../model/AppointmentSchema")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class userController {

  static register = async (req, res) => {
    console.log(req.body);
    const { name, email, gender, phone, dates, password, cpassword } = req.body;
    if (
      !name ||
      !email ||
      !gender ||
      !dates ||
      !phone ||
      !password ||
      !cpassword ||
      cpassword !== password
    ) {
      return res.status(422).json({ error: "invalid data" });
    }

    try {
      const userExit = await User.findOne({ email: email });
      if (userExit) {
        return res.status(422).json({ error: "already registered user" });
      }
      const spassword = await bcrypt.hash(password, 10);
      const copassword = await bcrypt.hash(cpassword, 10);

      const data = new User({
        name: name,
        email: email,
        phone: phone,
        gender: gender,
        dates: dates,
        password: spassword,
        cpassword: copassword,
      });
      const savedata = await data.save();
      console.log(savedata);
      if (savedata) {
        res.status(201).json({ message: "successfully registered User" });
      } else {
        res.status(500).json({ error: "registration failed" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  static login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(522).json({ error: "invalid data" });
    }
    try {
      const data = await User.findOne({ email: email });
      if (data != null) {
        const hashcompare = await bcrypt.compare(password, data.password);
  
        const token = await data.generateAuthToken(); //calling userschema function called generateAuthToken
        res.cookie("jwtToken", token, {
          maxAge: new Date(Date.now() + 259800000),
          httpOnly: true,
        });
  
        if (hashcompare) {
          return res.status(201).json({ message: "user logged in" });
        } else {
          return res.status(422).json({ error: "invalid data" });
        }
      } else {
        return res.status(422).json({ error: "plz complete data" });
      }
    } catch (error) {
      console.log(error);
    }
  }

  static Home = (req, res) => {
    res.send(req.rootuser);
  };

  static About = (req, res) => {
    res.send(req.rootuser);
  }

  static Logout = (req, res) => {
    console.log("at 106 at auth .js");
    res.clearCookie("jwtToken", { path: "/" });
    console.log("at 108 at auth .js");
    res.status(200).send("User Logout");
  }

}

class adminController {

    static AddDoctor = async(req,res)=>{
        console.log(req.body);
        const { name, email, degree, gender, dates } = req.body;
        if (
          !name ||
          !email ||
          !degree ||
          !gender ||
          !dates
        )
        {
          return res.status(422).json({ error: "invalid data" });
        }
    
        try {
          const DoctorExit = await Doctor.findOne({ email: email });
          if (DoctorExit) {
            return res.status(422).json({ error: "already registered Doctor" });
          }
    
          const data = new Doctor({
            name: name,
            email: email,
            gender: gender,
            degree:degree,
            dates: dates,
       
          });
          const savedata = await data.save();
          console.log(savedata);
          if (savedata) {
            res.status(201).json({ message: "successfully registered Doctor" });
          } else {
            res.status(500).json({ error: "registration failed" });
          }
        } catch (error) {
          console.log(error);
        }
      };

    static getDoctor = async (req,res)=>{
      try {
        const data = await Doctor.find();

        if(!data){
          throw new Error("user not found");
        }
        // console.log(data);
        res.send(data);
      } catch (error) {
        res.status(401).send("Doctor not found")
        console.log(error)
      }
    }

    static Appontment_detail = async (req,res)=>{
      console.log(req.body);
      const {doctor_name,email, name, date, time } = req.body;
      if (
        !doctor_name ||
        !email ||
        !name ||
        !date ||
        !time
      )
      {
        return res.status(422).json({ error: "invalid data" });
      }
  
      try {
        // const Appointments_exits = await Doctor.findOne({ time: time });
        // if (DoctorExit) {
        //   return res.status(422).json({ error: "already registered Doctor" });
        // }
  
        const data = new Appointments({
          doctor_name:doctor_name,
          name: name,
          email: email,
          date: date,
          time_of_meeting: time,
        });
        const savedata = await data.save();
        // console.log(savedata);
        if (savedata) {
          res.status(201).json({ message: "successfully registered Appointmnet" });
        } else {
          res.status(500).json({ error: "registration failed for Appointmnet" });
        }
      } catch (error) {
        console.log(error);
      }
    }

    static Get_Appointment_detail = async (req,res)=>{
      const val = req.params.email
      console.log(val);
      try {
        const data = await Appointments.find({email:val});
        console.log(data);
        if(!data){
          throw new Error("user not found");
        }
        // console.log(data);
        res.send(data);
      } catch (error) {
        res.status(401).send("Doctor not found")
        console.log(error)
      }
    }

}
module.exports = {userController,adminController};
