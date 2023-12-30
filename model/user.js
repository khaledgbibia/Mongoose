const mongoose = require("mongoose")


const userShema = mongoose.Schema({

name: {type: String, required:true},
age:Number,
favoritFoods:[String],

})
module.exports= mongoose.model("User",userShema)