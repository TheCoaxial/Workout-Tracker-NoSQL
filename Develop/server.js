//Requiring in dependencies
const express = require("express");
const mongoose = require("mongoose");
const path = require("path")


const PORT = process.env.PORT || 3000;


const app = express();

//Use Middleware
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(express.static("public"));

require("./controllers/HTMLcontroller.js");
require("./controllers/APIcontroller.js");


mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/WorkoutTracker',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
);


//Litening to port
app.listen(PORT, () =>{
    console.log("App listening on PORT " + PORT);
})