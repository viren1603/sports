const { teamSchema, playerSchema } = require("../model/index");

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
    let age = req.body.age
    let captain = req.body.captain
    let dob = req.body.dob
    let savePlayer = await playerSchema.build({
        ids, name, age, captain, dob
    })
    await savePlayer.save()
    res.end('data is posted')
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


