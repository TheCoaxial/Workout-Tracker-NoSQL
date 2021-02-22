//Requiring in dependencies
const express = require("express");
const mongoose = require("mongoose");
const path = require("path")


const PORT = process.env.PORT || 3000;


const app = express();


mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/WorkoutTracker',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );