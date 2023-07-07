const express = require('express');
const app = express();


app.get('/', (req, res) =>{
    console.log('Hello World')
    res.send('fcc')
})

app.listen(process.env.PORT, ()=>{
    console.log('server listening on port ' + process.env.PORT); 
})

