const express = require('express')
const bodyParser = require('body-parser')

const server = express()

server.use(bodyParser.json())

server.use('/', [
    require('./routes/tickets'),
    require('./routes/animals'),
    require('./routes/seacritters'),
    require('./routes/areas')
])

server.listen(7000, () => {
    console.log("Server started at http://localhost:7000")
})