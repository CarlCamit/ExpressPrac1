const express = require('express')
const Animal = require('../models/animal')
const router = express.Router()

router.get("/animals", (req, res) => {  
    res.json(Animal.all())
})

module.exports = router