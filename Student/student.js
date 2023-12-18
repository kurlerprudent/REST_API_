const express = require('express')
const router = express.Router()

router.get('/',(req,res)=> {
    res.send('I am a student')
})



export default router