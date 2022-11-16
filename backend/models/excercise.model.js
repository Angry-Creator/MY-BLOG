const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const excerciseSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    duration: {
        type: Number,
        require: true
    },
    date: {
        type: String,
        require: true
    },

}, {
    timestamps: true,
});

const Excercise = mongoose.model('Excercise', excerciseSchema);

module.exports = Excercise;