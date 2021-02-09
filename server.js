
var express = require("express");
const mongoose = require('mongoose');
var compression = require("compression");
const logger = require("morgan");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(compression());
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

const db = require('./models');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mealplanner", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

// Create Exercise
app.post('/create', (req, res) => {
    db.Exercise.create(req.body)
        .then(dbPlan => {
            db.Day.findOnAndUpdate({_id:req.body.DayId}, {$push: {exercises:dbPlan._id}})
            .then(dbDay =>res.send(dbDay))
    }).catch(err =>res.json(err))  
})

// Delete Exercise
app.delete('/delete', (req, res) =>{
    db.Exercise.remove({
        _id: mongojs.ObjectID(req.params.id)
    },
    (error, data) => {
        if (error) {
          res.send(error);
        } else {
          res.send(data);
        }
      }
    );
});

// Starts server

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});