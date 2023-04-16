const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
//understand json data
app.use(express.json())

//dotenv data
dotenv.config({path:'./config.env'});
const PORT = process.env.PORT;

// database connection & schema
require('./db/conn.js')
const User = require('./model/userSchema.js')

//router
app.use(require('./router/Routers.js'))

//middleware
// const middleware =(req,res,next)=>{
//     console.log("hello to our middleware")
//     next();
// }

app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`)
});