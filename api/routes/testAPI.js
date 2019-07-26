var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
var app = express();
var subscriber = require('../models/subsciber/subsciber');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/BrainhubEvent");

var nameSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    date: String
});
var User = mongoose.model("Subscribers", nameSchema);

router.get('/', function (req, res, next) {
    res.send('API is working properly');
    console.log('get')
});

router.post('/post', (req, res) => {


    var myData = new User(req.body);
    console.log(req.body);

    myData.save()
        .then(item => {
            res.send('Guest saved to database');

        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });

});

module.exports = router, app;