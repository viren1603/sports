const { teamSchema } = require("../model/index");
const playerSchema = require('../model/index')

// const jwt = require("jsonwebtoken")

module.exports.teamSchemaCreate = async function (req, res) {
    let ids = req.body.ids;
    let name = req.body.name
    let saveTeam = await teamSchema.build({
        ids, name
    })

    await saveTeam.save()
    res.send('data is posted')
}
module.exports.playerSchemaCreate = async function (req, res) {
    let ids = req.body.ids;
    let name = req.body.name
    let email = req.body.email
    let date_joining = req.body.date_joining
    let dob = req.body.dob
    // let authtoken = await jwt.sign(req.body.email, "huuyr7c6778gytuer54664fgh6874ff559j88hgf5587")
    let savePlayer = await playerSchema.build({
        ids, name, email, date_joining, dob
    })
    await savePlayer.save()
    // res.json({ authtoken })
    res.send("data posted")
}



module.exports.teamSchemaGet = async function (req, res) {
    let allData = await teamSchema.findAll();
    res.send(allData)
}
module.exports.playerSchemaGet = async function (req, res) {
    let allData = await playerSchema.findAll();
    res.send(allData)
}



module.exports.teamSchemaUpdate = async function (req, res) {
    let data = req.body;
    let a = teamSchema.update(data, {
        where: { id: req.params.id }
    })
    res.send("data is update")
}
module.exports.playerSchemaUpdate = async function (req, res) {
    let data = req.body;
    let a = playerSchema.update(data, {
        where: { id: req.params.id }
    })
    res.send("data is update")
}




module.exports.teamSchemaDelate = async function (req, res) {
    let a = await teamSchema.destroy({
        where: { id: req.params.id }
    })
    res.send("data is delate")
}

module.exports.playerSchemaDelate = async function (req, res) {
    let a = await playerSchema.destroy({
        where: { id: req.params.id }
    })
    res.send("data is delate")
}


