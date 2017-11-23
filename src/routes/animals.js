const express = require('express')
const Animal = require('../models/animal')
const router = express.Router()

router.get("/animals", (req, res) => {  
    res.json(Animal.all())
})

router.get("/animals/:id", (req, res) => {
    const id = req.params["id"]
    const animal = Animal.find(id)
    if (animal) {
        res.json(animal)
    }
    else {
        res.status(404).json({ error: `An animal can not be found with an id of ${id}`})
    }
})

module.exports = router