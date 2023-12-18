const express = require('express')
const mongoose = require('mongoose');
const app = express()
const PORT = 3005

app.get('/',(req,res)=> {
    res.send('Hello there!')
})



mongoose.connect('mongodb+srv://prudent:987654321@cluster0.50j4aw5.mongodb.net/CompanyDB?retryWrites=true&w=majority')
.then(()=>{
    console.log('HEConnected to MongoDB')
    app.listen(PORT,()=> {
        console.log('Server started successfully')
        })
   
}).catch((error)=>{
    console.log('Error')
})


