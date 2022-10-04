const database = require("../config/config")
const sequlize = require("sequelize")

const teamSchema = database.define('team', {
    ids: sequlize.STRING,
    name: sequlize.STRING
})
teamSchema.sync()

const playerSchema = database.define('player', {
    ids: sequlize.INTEGER,
    name: sequlize.STRING,
    email: sequlize.STRING,
    date_joining: sequlize.INTEGER,
    dob: sequlize.INTEGER
})
playerSchema.sync()


module.exports = teamSchema;
module.exports = playerSchema;
