const express = require('express')

const server = express()

server.use('/', [
    require('./routes/tickets'),
    require('./routes/animals')
])

server.listen(7000, () => {
    console.log("Server started at http://localhost:7000")
})