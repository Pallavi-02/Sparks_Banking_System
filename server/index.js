const express = require('express');
const user=require('./router/user')
const app=express();
const cors=require("cors");
const mongoose = require('mongoose')


app.use(cors());
app.use(express.json());
const uri ="mongodb+srv://Pallavi_02:Pallavi_123@cluster0.vks50.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect( uri ,{useNewUrlParser: true ,useUnifiedTopology: true});

mongoose.connection.on('connected',()=>{
    console.log('conected successfully');
})
mongoose.connection.on('error',(err)=>{
    console.log('not connected ',err);
})
app.use('/',user);
app.listen(4000,()=>{
  console.log("server running successfully");
});



