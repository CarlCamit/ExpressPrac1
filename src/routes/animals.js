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

router.post("/animals", (req, res) => {
    const attributes = req.body
    const newAnimal = Animal.create(attributes)
    res.status(201).json(newAnimal)
})

router.patch("/animals/:id", (req, res) => {
    const id = req.params["id"]
    const attributes = req.body
    const updatedAnimal = Animal.update(id, attributes)
    if (updatedAnimal) {
        res.json(updatedAnimal)
    }
    else {
        res.status(404).json({ message: "Animal could not be updated"})
    }
})

router.delete("/animals/:id", (req, res) => {
    const id = req.params["id"]
    const removedAnimal = Animal.destroy(id)
    if (removedAnimal) {
        res.json(removedAnimal)
    }
    else {
        res.status(404).json({ error: `An animal can not be found with an id of ${id}`})
    }
})

module.exports = router