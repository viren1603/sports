require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const bodyparser = require("body-parser");
const sequlize = require("sequelize");

app.set(bodyparser.json());
app.set(bodyparser.urlencoded({ extended: false }))


let database = new sequlize(process.env.DB, process.env.DB_NAME, process.env.DB_PASSWORD, { port: 3306, dialect: "mysql" })

const teamSchema = database.define('team', {
    ids: sequlize.INTEGER,
    name: sequlize.STRING
})
teamSchema.sync()

const playerSchema = database.define('player', {
    ids: sequlize.INTEGER,
    name: sequlize.STRING,
    age: sequlize.INTEGER,
    captain: sequlize.STRING,
    dob: sequlize.INTEGER
})
playerSchema.sync()

database.authenticate().then(() => {
    console.log("connection sucessfulley");
}).catch((err) => {
    console.log(err, 'db err');
})

app.listen(port, function (error) {
    if (error) {
        console.log("data base port eror");
        return false;
    }
    console.log(`http://localhost:${port}`);
})  