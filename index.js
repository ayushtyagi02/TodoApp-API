const express= require('express');
const app=express();

//load config from env
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for todo Api
const todoRoutes=require('./routes/todos');
//mount all the routes
app.use('/api/v1',todoRoutes);

//start server 
app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
})

//connect to database
const dbconnect = require("./config/database");
dbconnect();
app.get('/',(req,res)=>{
    res.send(`<h1>This is Homepage</h1>`);
})