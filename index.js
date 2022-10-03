require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const bodyparser = require("body-parser");
const sequlize = require("sequelize");
app.use(express.Router())
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }))


let database = new sequlize(process.env.DB, process.env.DB_NAME, process.env.DB_PASSWORD, { port: 3306, dialect: "mysql" })

database.authenticate().then(() => {
    console.log("connection sucessfulley");
}).catch((err) => {
    console.log(err, 'db err');
})


const teamSchema = database.define('team', {
    ids: sequlize.STRING,
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



app.post('/teamSchema', async function (req, res) {
    // console.log({ data: req.body })
    let ids = req.body.ids;
    let name = req.body.name
    let saveTeam = await teamSchema.build({
        ids, name
    })

    await saveTeam.save()
    res.send('data is posted')
})
app.post('/playerSchema', async function (req, res) {
    let ids = req.body.ids;
    let name = req.body.name
    let age = req.body.age
    let captain = req.body.captain
    let dob = req.body.dob
    let savePlayer = await playerSchema.build({
        ids, name, age, captain, dob
    })
    await savePlayer.save()
    res.end('data is posted')
})

app.get('/teamSchema', async function (req, res) {
    let allData = await teamSchema.findAll();
    res.send(allData)
})
app.get('/playerSchema', async function (req, res) {
    let allData = await playerSchema.findAll();
    res.send(allData)
})



app.put('/teamSchema/update/:id', async function (req, res) {
    let data = req.body;
    let a = teamSchema.update(data, {
        where: { id: req.params.id }
    })
    res.send("data is update")
})
app.put('/playerSchema/update/:id', async function (req, res) {
    let data = req.body;
    let a = playerSchema.update(data, {
        where: { id: req.params.id }
    })
    res.send("data is update")
})

app.delete('/teamSchema/delate/:id', async function (req, res) {
    let a = await teamSchema.destroy({
        where: { id: req.params.id }
    })
    res.send("data is delate")
})

app.delete('/playerSchema/delate/:id', async function (req, res) {
    let a = await playerSchema.destroy({
        where: { id: req.params.id }
    })
    res.send("data is delate")
})





app.listen(port, function (error) {
    if (error) {
        console.log("data base port eror");
        return false;
    }
    console.log(`http://localhost:${port}`);
})  