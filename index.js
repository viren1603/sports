require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const bodyparser = require("body-parser");


app.set(bodyparser.json());
app.set(bodyparser.urlencoded({ extended: false }))


app.listen(port, function (error) {
    if (error) {
        console.log("data base port eror");
        return false;
    }
    console.log(`http://localhost:${port}`);
})  