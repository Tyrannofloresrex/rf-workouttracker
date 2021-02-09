const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const DaySchema = new Schema({
    name: { 
    type: String,
    required: "Day of the Week is Required."
    },
    Exercises: [
    { 
    type: Schema.Types.ObjectId,
    ref: "Exercise"
    }
    ]
});

const Day = mongoose.model("Day", DaySchema)

module.exports = Day