var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var omeletRoute = require("./routing/omelet-router");


app.use(express.static("public"));

app.use(bodyParser.json());

app.use("/omelets", omeletRoute);

mongoose.connect("mongodb://localhost/fullstack-database");

app.get("/", function(req,res){
    console.log("working");
    res.send();
})

app.listen(8000, function(){
    console.log("listening on 8000");
})