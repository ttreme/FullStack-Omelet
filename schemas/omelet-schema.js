var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var omeletSchema = new Schema ({
    title : String,
    description : String,
    ingredients : [String],
    eggs : Number,
    img : String
});
var Omelet = mongoose.model("Omelet", omeletSchema);


module.exports = Omelet;