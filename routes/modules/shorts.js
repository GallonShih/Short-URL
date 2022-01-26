const express = require('express')
const router = express.Router()
const Short = require('../../models/short')

router.post('/', (req, res) => {
    const { url_original } = req.body
    const url_id = '12345'
    res.redirect(`/shorts/result/${url_id}`)
})
router.get('/result/:url_id', (req, res) => {
    const url_id = req.params.url_id
    res.render('result', { url_id })
})


module.exports = router