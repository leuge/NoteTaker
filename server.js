var express = require("express")
var PORT = process.env.PORT || 8080
var app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static("public"))

var htmlRoutes = require("./routes/htmlRoutes")
var apiRoutes = require("./routes/apiRoutes")

app.use(htmlRoutes)
app.use(apiRoutes)


app.listen(PORT,function(){
    console.log("app is listening "+PORT)
})