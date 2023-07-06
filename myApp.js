const express = require('express');
const app = express();

const PORT = 8000

app.get('/', (req, res) =>{
    console.log('Hello World')
})

app.listen(PORT, ()=>{
    console.log('server listening on port' + PORT); 
})

