var router = require("express").Router()
var db=require("../db/db.json")
var fs = require("fs")

router.get("/api/notes",function(req,res){
    res.json(db)
})

router.post("/api/notes",function(req,res){
    console.log(req.body)
   db.push(req.body)
   fs.writeFile("./db/db.json", JSON.stringify(db) ,function(err){
       if(err)throw err
       res.json(db)
   })
})

module.exports=router