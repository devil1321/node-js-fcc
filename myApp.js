const express = require('express')
const app = express()

const path = __dirname + '/views/index.html'

app.use('/public',express.static(__dirname + '/public'))

app.get('/',(req,res)=>{
    res.sendFile(path)
})


app.listen(8000,()=>console.log('Express listening on port 8000'))