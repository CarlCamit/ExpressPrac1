const express = require('express')
const Area = require('../models/area')
const router = express.Router()

router.get("/areas", (req, res) => {
    if (Object.keys(req.query).length !== 0) {
        const nameQuery = req.query.name
        let searchedAreas = Area.search(nameQuery)
        res.json(searchedAreas)
    }
    else {
        areas = Area.all()
        res.json(areas)
    }
 })

router.get("/areas/:id", (req, res) => {
    const id = req.params["id"]
    const area = Area.find(id)
    if (area) {
        res.json(area)
    }
    else {
        res.status(404).json({ error: `An area can not be found with an id of ${id}`})
    }
})

router.post("/areas", (req, res) => {
    const attributes = req.body
    const newArea = Area.create(attributes)
    res.status(201).json(newArea)
})

router.patch("/areas/:id", (req, res) => {
    const id = req.params["id"]
    const attributes = req.body
    const updatedArea = Area.update(id, attributes)
    if (updatedArea) {
        res.json(updatedArea)
    }
    else {
        res.status(404).json({ message: "Area could not be updated"})
    }
})

router.delete("/areas/:id", (req, res) => {
    const id = req.params["id"]
    const removedArea = Area.destroy(id)
    if (removedArea) {
        res.json(removedArea)
    }
    else {
        res.status(404).json({ message: `An area can not be found with an id of ${id}`})
    }
})

module.exports = router