const express = require('express');
const mongoose = require('mongoose');
const studentRoute = require("./controller/studentRoute");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv").config();

const DB = process.env.DATABASE;
const Port = process.env.PORT;
mongoose.connect(DB, {useNewUrlParser: true})
mongoose.set("strictQuery", true); // DeprecationWarning To supress warning
// var db = mongoose.connection;
// db.on("open", () => {
//     console.log("Database connected");
// })
// db.on("error", () => {
//     console.log("Database error");
// })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use("/studentRoute", studentRoute);

app.listen(Port,() => {
    console.log(`Server is running on port ${Port}`);
})