const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name:String,
    age:Number,
    favoruiteFoods:[String]
})

export const Person = mongoose.model('Person', personSchema)