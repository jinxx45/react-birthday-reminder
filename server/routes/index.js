const express = require('express')
const actions = require('../methods/actions')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Hello World")
})



//adding a New Birthday
router.post('/addBirthday',actions.addBirthday)

module.exports = router