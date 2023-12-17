const express = require('express')
const server = express()
const port = 3001

server.get('/', (req,res)=>{
    res.send('My name is Obed')
})

server.listen(port, ()=>{
    console.log('server started successfully')
})