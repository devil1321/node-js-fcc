const express = require('express')
const app = express()

const path = __dirname + '/views/index.html'

app.get('/',(req,res)=>{
    res.sendFile(path)
})


app.listen(8000,()=>console.log('Express listening on port 8000'))