const express = require('express')
const ticketRouter = require('./routes/tickets')

const server = express()

server.get('/', (req, res) => {
    res.json({ message: "This is home" })
})

server.get('/about', (req, res) => {
    res.json({ message: "This is about" })
})

server.use('/', ticketRouter)

server.listen(7000, () => {
    console.log("Server started at http://localhost:7000")
})