const express = require('express');
const routes = require('./routes')

const app = express();
const port = 3000 | undefined;

routes(app)


app.listen(port, () => {
    console.log(`Server runinig on http://localhost:${port}`)
})

module.exports = app