import express from 'express'
import mongoose from 'mongoose'  //creating database for doing crude operations
import cors from 'cors'
import dotenv from 'dotenv'

// in node.js we write users.js but in react we write users 
import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'


const app = express(); // express server

dotenv.config();

//these are the middleware
app.use(express.json({ limit: "30mb", extended: true }))//our backend is rest api
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

app.get('/', (req, res) => {
    res.send("This is a stack overflow clone API")
})

const PORT = process.env.PORT || 5000
// it will just create a static mongodb  
//it will just install the mongodb in local storageand they will use that
//but we will do is, there is a cloud storage in mongodb called atlas we will use that 

const DATABASE_URL = "mongodb+srv://Anamika_rawat:Bpit12345@stack-overflow-clone.frpy5cd.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => { console.log(`server running on port ${PORT}`) }))
    .catch((err) => console.log(err.message))

// var express = require('express');
// var app = express();
// var PORT = 3000;

// // Without middleware 
// app.get('/user', function (req, res) {
//     res.status(404).json({ message: "User already Exist." })
// })

// app.listen(PORT, function (err) {
//     if (err) console.log(err);
//     console.log("Server listening on PORT", PORT);
// }); 