const express = require('express')

const app = express()
const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/inventory")

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","http://localhost:3000")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})

app.use(require("./Main/inventory")) //backend
app.listen(5000,"0.0.0.0")
