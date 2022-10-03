require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const bodyparser = require("body-parser");
const sequlize = require("sequelize");
// app.use(express.Router())
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }))

app.use('/', require('./routes/routr'))

app.listen(port, function (error) {
    if (error) {
        console.log("data base port eror");
        return false;
    }
    console.log(`http://localhost:${port}`);
})  