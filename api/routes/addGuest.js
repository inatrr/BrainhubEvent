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
    firstname: { type: String, required: [true, 'Name is null'] },
    lastname: { type: String, required: [true, 'Surname is null'] },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
            },
            message: props => `${props.value} is not a valid email`
        }
    },
    date: { type: String, required: [true, 'Date is null'] }
});

var User = mongoose.model("Subscribers", nameSchema);

router.get('/', function (req, res, next) {
    res.send('API is working properly');

});

router.post('/post', (req, res) => {


    var myData = new User(req.body);
    console.log(req.body);

    myData.save()
        .then(item => {
            res.send('Guest saved to event');

        })
        .catch(err => {
            res.status(400).send("Unable to save to event");
        });

});

module.exports = router, app;