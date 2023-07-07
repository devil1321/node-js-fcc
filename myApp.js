require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser:true,useUnifiedTopology:true }).then(()=>console.log('DB Connected'))

app.listen(8000,()=>console.log('Express listening on port 8000'))