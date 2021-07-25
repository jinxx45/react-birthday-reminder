const express = require('express')
const actions = require('../methods/actions')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Hello World")
})



//adding a New User
router.post('/adduser',actions.addNew)

//authenticating a user
router.post('/authenticate',actions.authenticate)

//getting information about the user

router.get('/getinfo',actions.getinfo)

module.exports = router