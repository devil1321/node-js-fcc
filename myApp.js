require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Person = require('./models/person.model')


mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser:true,useUnifiedTopology:true }).then(()=>console.log('DB Connected'))

app.post('/add-person', (req,res)=>{
    const person = new Person({
        name:'Dominik',
        age:29,
        favoruiteFoods:['Apple']
    })
    person.save()
    res.end()
})

app.post('/add-persons', (req,res)=>{
   Person.create([
    {
        name:'Dominik',
        age:29,
        favoruiteFoods:['Apple']
    },
    {
        name:'Mike',
        age:39,
        favoruiteFoods:['Orange']
    }])
    res.end()
})

app.get('/find-many', async(req,res)=>{
    const persons = await Person.find()
    res.json(persons)
})

app.get('/get-food',(req,res)=>{
    const searchFood = async(food) =>{
        const favFood = await Person.findOne({favoruiteFoods:{$in:food}})
        res.json(favFood)
    }
    const food = req.query.food
    searchFood(food)
})

app.listen(8000,()=>console.log('Express listening on port 8000'))