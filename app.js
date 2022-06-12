const express = require('express');
const app = express();
const mongoose = require('mongoose')
const port = 3000;
const bodyparser = require('body-parser');
require('dotenv/config')

//DB connection
async function connect(){
  await mongoose.connect(process.env.DB)
   console.log('connect to database')
}
connect()

//Parsing
//app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

//import route
const postRoute = require('./routes')

app.use('/post',postRoute);

app.listen(port,console.log(`server started on ${port}`));