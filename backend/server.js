const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

mongoose.connect('mongodb://localhost:27017/usersdb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(express.json());

const excercise = require("../backend/routes/excercise");
const user = require("../backend/routes/user");

app.use("/excercise", excercise);
app.use("/user", user);

app.listen(port, ()=>{
    console.log(`Server is running at Port ${port}`);
}); 
