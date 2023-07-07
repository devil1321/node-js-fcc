require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Person = require('../models/Person')


mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser:true,useUnifiedTopology:true }).then(()=>console.log('DB Connected'))

app.post('/add-person', (req,res)=>{
    const person = new Person({
        name:'Dominik',
        age:29,
        favoruiteFoods:['Apple']
    })
    person.save()
})

app.listen(8000,()=>console.log('Express listening on port 8000'))