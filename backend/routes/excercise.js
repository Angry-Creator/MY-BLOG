const router = require("express").Router();
let Excercise = require("../models/excercise.model");

router.route("/").get((req, res)=>{
    Excercise.find()
    .then(excercise => res.json(excercise))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/").post((req, res)=>{
    const username = req.body.username;
    const name = req.body.name;
    const password = req.body.password;
    const photo = req.body.photo;
    const newExcercise = new Excercise({ username, name, password, photo });
    newExcercise.save()
    .then(() => res.json("login successful"))
    .catch(err => res.status(400).json("Error: " + err));
});


module.exports = router;