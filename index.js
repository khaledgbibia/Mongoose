
const express = require("express");
const dotenv  = require("dotenv");
const mongoose = require("mongoose");
const User = require("./model/user");

const app=express();
dotenv.config();
mongoose.connect(process.env.DB_URL).then(console.log("DB Connected"))

const PORT = process.env.PORT || 4000;

// async function start(){
//     const person = await User.create({
//         name : "khaled",
//         age : 40,
//         favoritFoods: ["pizza"],
//     })


// }

// start();
// async function start(){
//     const arrayPeopels = [{name : "amine", age : 30,favoritFoods: ["pizza"]},
//     {name : "taher", age : 40,favoritFoods: ["spagetti"]}

// ];

// await User.create(arrayPeopels);
// }
// start();

// async function start(){
// console.log(await User.find());

// }
// start();
// async function start(){
//     console.log(await User.findOne({name: "khaled"}));
    
//     }
//     start();

// async function start(){
//     console.log(await User.findById("658fe00fc20e44e956759ca6"));
    
//     }
//     start();
// async function start(){
//    await User.findByIdAndUpdate("658fe00fc20e44e956759ca6",{$push:{favoritFoods: "humburger"}})
    
//     }
//     start();
// async function start(){
//    await User.findByIdAndUpdate("658fe00fc20e44e956759ca6",{age: 25})
    
//     }
//     start();
// async function start(){
//    await User.findByIdAndDelete("658fe00fc20e44e956759ca6")
    
//     }
//     start();

async function start(){
    const specificSearch = await User.find({favoritFoods: "pizza"}).sort({age:1}).limit(1).select("name")
    console.log(specificSearch)
      }
     
      start();

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});