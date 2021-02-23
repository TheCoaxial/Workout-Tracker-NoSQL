//Require in dependencies
const path = require("path")
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");



const PORT = process.env.PORT || 3000;

const app = express();

// Use Middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

require("./controllers/htmlController.js")(app, path)
require("./controllers/apiController.js")(app)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
    seNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// Listening to port
app.listen(PORT, () => {
  console.log('App running on port ' + PORT);
});