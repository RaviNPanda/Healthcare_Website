const mongoose = require('mongoose');

const db = process.env.DATABASE;

mongoose.set('strictQuery', true);
mongoose.connect(db).then(()=>{
    console.log("connected")
}).catch((error)=>{
    console.log(error)
})