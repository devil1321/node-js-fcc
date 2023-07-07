const express = require('express')
const app = express()
require('dotenv').config()

const middleware = (req,res,next) => {
    console.log(`${req.method} ${req.path}-${req.ip}`)
    next()
}

const timeMiddleware = (req,res,next) =>{
    req.time = new Date().toString()
    next()
}

const path = __dirname + '/views/index.html'

app.use('/public',express.static(__dirname + '/public'))

app.use(middleware)

app.get('/',(req,res)=>{
    res.sendFile(path)
})

app.get('/now',timeMiddleware,(req,res)=>{
    res.json({"time":req.time})
})

app.get('/json',(req,res)=>{
    if(!process.env.MESSAGE_STYLE === 'uppercase'){
        res.json({"message": "Hello json"})
    }else{
        res.json({message: "Hello json".toUpperCase()})
    }
})

app.get("/:word/echo",(req,res)=>{
    const word = req.params.word
    res.json({"word":word})
})

app.use('/name',(req,res)=>{
    const query = req.query
    res.json({...query})
})

app.listen(8000,()=>console.log('Express listening on port 8000'))