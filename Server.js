const express = require ('express')
const mongoose = require ('mongoose')
const user = require ('./Routes/User')
const DBConnection = require('./Config/DB')
const Books = require('./Routes/BooksRoute')
const cookieparser=require('cookie-parser')

require ('dotenv').config()

const app = express();
app.use(express.json());
app.use(cookieparser())

DBConnection();
app.use('/user',user)
app.use ('/Books',Books)











app.listen(4000,()=>{
 console.log('server is running');
 
})
