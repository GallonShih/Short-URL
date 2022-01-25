const express = require('express')
const router = express.Router()
const Short = require('../../models/short')

router.post('/', (req, res) => {
    res.redirect('/shorts/result')
})
router.get('/result', (req, res) => {
    res.render('result')
})

module.exports = router