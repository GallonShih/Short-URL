const express = require('express')
const router = express.Router()

const home = require('./modules/home')
router.use('/', home)
const shorts = require('./modules/shorts')
router.use('/shorts', shorts)

module.exports = router