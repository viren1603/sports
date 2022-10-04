const joi = require("joi");

const playerSchemaJoi = joi.object().keys({
    ids: joi.string(),
    name: joi.string(),


    date_joining: joi.string(),
    dob: joi.string(),
    email: joi.string().empty().required().email().message({
        'String.empty': 'email must be required',
        'aney.required': 'email must be required',
        'String.email': 'Invalid email formet'
    })
})

module.exports = playerSchemaJoi;