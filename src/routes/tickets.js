const express = require('express')

const router = express.Router()

router.get("/tickets", (req, res) => {
    res.json({
        adult: 35,
        concession: 23,
        children: 15
    })
})

module.exports = router