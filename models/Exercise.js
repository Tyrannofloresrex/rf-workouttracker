const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ExerciseSchema = new Schema({
    name: {
    type: String,
    required: "Exercise name is Required"
    },  
    dayofWeek: {
        type: String,
        required: "Day of the Week is required"
    },
    reps: {
    type: Number,
    },
    time: {
    type: Number,
    }
});
const Exercise = mongoose.model("Exercise", ExerciseSchema)

module.exports = Exercise