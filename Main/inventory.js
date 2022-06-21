const express = require('express')
const router = express.Router()
const db = require("../Database/inventory_query")


router.post("/api/inventory/new",async(req,res,next)=>{
let data= req.body.data


await db.inv_new(data.inv_id,data.Name1,data.Name2,data.Price,data.Vendor,data.Date).then((result)=>{
    res.send(result==1?"done":"error")
})



})


router.get("/api/inventory/fetch",async(req,res)=>{


   let data= await db.fetch()
   res.send(data!=0?data:"empty")
})

module.exports=router