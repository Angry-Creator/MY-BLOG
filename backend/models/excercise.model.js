const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const excerciseSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    photo: {
        type: String,
        require: true
    },

}, {
    timestamps: false,
});

const Excercise = mongoose.model('Excercise', excerciseSchema);

module.exports = Excercise;