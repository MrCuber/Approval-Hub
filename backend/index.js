const express = require('express');
const mongoose = require('mongoose');
const studentRoute = require("./controller/studentRoute");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

mongoose.set("strictQuery", true); // DeprecationWarning To supress warning
mongoose.connect("mongodb+srv://admin:admin@cluster0.ofvmpdb.mongodb.net/schooldb")
var db = mongoose.connection;
db.on("open", () => {
    console.log("Database connected");
})
db.on("error", () => {
    console.log("Database error");
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use("/studentRoute", studentRoute);

app.listen(4000,() => {
    console.log("Server is running on port 4000");
})