const playerSchemaJoi = require("./playerMidellware");
module.exports = function (validator) {
    if (playerSchemaJoi.hasOwnProperty(validator)) {
        throw new Error(`${validator} validator is not exist`)
    }
    return async function (req, res, next) {
        try {
            const { error } = playerSchemaJoi.validate(req.body)
            if (error) {
                res.status(200).json({ error: error.message })
                return;
            } else {
                next()
            }
        } catch (error) {
            error.statusCode = 422
            next(error)
        }
    }
}