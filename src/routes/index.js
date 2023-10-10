const bodyParser  = require("body-parser")
const MembroRoutes = require('./membroRoutes')


module.exports = app => {
    app.use(
        bodyParser.json(),
        MembroRoutes
    )
}