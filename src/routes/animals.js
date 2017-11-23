const express = require('express')
const Animal = require('../models/animal')
const router = express.Router()

router.get("/animals", (req, res) => {  
    res.json(Animal.all())
})

router.get("/animals/:id", (req, res) => {
    const id = req.params["id"]
    const animal = Animal.find(id)
    res.json(animal)
})

module.exports = router