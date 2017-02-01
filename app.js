"use strict";
// require('dotenv').config();

// Basic express setup:

const PORT          = process.env.PORT || 3000;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();

// set view engine to ejs
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', (req,res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});