// install and import express
const express = () => {};
let app = express();
const mongoose = require("mongoose")
const express = require("express")
const path = require("path")

// Code here

// const connect = () =>{
//     return mongoose.connect("http://localhost:3000/user.json")
// }

const UserSchema = new mongoose.Schmea({
    "id": {type: Number},
    "first_name": {type: String},
    "last_name": {type: String},
    "email": {type: String},
    "gender": {type: String},
    "ip_address": {type: String},
    "age": {type: Number}
})

const User = mongoose.model("user", UserSchema)

app.get("/",async(req,res)=>{
    try{
        
    }
})

app.get("/",async(req,res)=>{
    const user = await User.find().lean().exec()
    return res.send(user)
})

// Note: Do not remove this export statement

app.listen(8000,async ()=>{
    try{
       
        console.log("listening on port 8000")
    }
    catch(err){
        console.error(err.message)
    }
})

module.exports = app;
