// install and import express

let app = express();
const mongoose = require("mongoose")
const express = require("express")
const path = require("path")

// Code here

// const connect = () =>{
//     return mongoose.connect("http://localhost:3000/user.json")
// }

app.use(express.json())

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
        var fileu = await path.join(__dirname+"/assets/users.html")
        return res.sendFile(fileu)
    }
    catch(err){
        return res.send(err)
    }
})


app.get("/users",async(req,res)=>{
    try{
        var jsony = await path.join(__dirname+"/assets/users.json")
        return res.sendFile(jsony)
    }
    catch(err){
        return res.send(err)
    }
})

app.get("/users:id",async(req,res)=>{
    try{
        var userbid = await user.

        })
    }
    catch(err){
        return res.send(err)
    }
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
