const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ejs = require('ejs');
mongoose.connect('mongodb://localhost/tft', {useNewUrlParser:true});

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public/dist/public'));
require('./server/config/routes.js')(app);

app.listen(8000,() =>{
    console.log("8000 is working")
})