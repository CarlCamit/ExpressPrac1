const express = require('express')
const SeaCritter = require('../models/seacritter')
const router = express.Router()

router.get("/seacritters", (req, res) => {
    const seaCritters = SeaCritter.all()
    res.json(seaCritters)
})

router.get("/seacritters/:id", (req, res) => {
    const id = req.params["id"]
    const SeaCritter = SeaCritter.find(id)
    if (SeaCritter) {
        res.json(SeaCritter)
    }
    else {
        res.status(404).json({ error: `A sea critter can not be found with an id of ${id}`})
    }
})

router.post("/seacritters", (req, res) => {
    const attributes = req.body
    const newSeaCritter = SeaCritter.create(attributes)
    res.status(201).json(newSeaCritter)
})

router.patch("/seacritters/:id", (req, res) => {
    const id = req.params["id"]
    const attributes = req.body
    const updatedSeaCritter = SeaCritter.update(id, attributes)
    if (updatedSeaCritter) {
        res.json(updatedSeaCritter)
    }
    else {
        res.status(404).json({ message: `Sea critter with an ${id} could not be updated`})
    }
})

router.delete("/seacritters/:id", (req, res) => {
    const id = req.params["id"]
    const removedSeaCritter = SeaCritter.destroy(id)
    if (removedSeaCritter) {
        res.json(removedSeaCritter)
    }
    else {
        res.status(404).json({ error: `A sea critter can not be found with an id of ${id}`})
    }
})

module.exports = router