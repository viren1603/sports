const express = require("express");
const r = express.Router();
const controller = require('../controller/index')

r.post('/teamSchemaCreate', controller.teamSchemaCreate);
r.post('/playerSchemaCreate', controller.playerSchemaCreate);


r.get('/teamSchemaGet', controller.teamSchemaGet);
r.get('/playerSchemaGet', controller.playerSchemaGet);


r.put('/teamSchema/update/:id', controller.teamSchemaUpdate);
r.put('/playerSchema/update/:id', controller.playerSchemaUpdate);


r.delete('/teamSchema/delate/:id', controller.teamSchemaDelate);
r.delete('/playerSchema/delate/:id', controller.playerSchemaDelate);

r.get('/', function (req, res) {
    res.send("this is home page");
})
module.exports = r;