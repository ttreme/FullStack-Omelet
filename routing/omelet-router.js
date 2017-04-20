var express = require ("express");
var omeletRoute = express.Router();
var Omelet = require ("../schemas/omelet-schema");

omeletRoute
    .get("/", function(req, res){
        Omelet.find(req.query, function(err, omeletArray){
          res.send(omeletArray);
        })
    })
    .post("/", function(req, res){
        var newOmelet = new Omelet(req.body);
        console.log(newOmelet);
        newOmelet.save(function(err,savedOmelet){
            res.send(savedOmelet);
        })
    })
    .delete("/:_id", function(req,res){
        Omelet.findByIdAndRemove(req.params._id,function(err,deletedOmelet){
            res.send(deletedOmelet);
        })
    })




module.exports = omeletRoute;