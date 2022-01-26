const express = require('express')
const router = express.Router()
const Short = require('../../models/short')
const generateShortPath = require('../../generate_short_path')

router.post('/', (req, res) => {
    const { url_original } = req.body
    const shortPath = generateShortPath()
    const url_short = `${req.headers.origin}/${shortPath}`
    const short = new Short({
        url_original: url_original,
        url_short: url_short
    })
    return short.save()
        .then((short) => res.redirect(`/shorts/result/${short._id}`))
        .catch(error => console.log(error))
})
router.get('/result/:url_id', (req, res) => {
    const url_id = req.params.url_id
    return Short.findById(url_id)
        .lean()
        .then( (short) =>  res.render('result', { short }))
        .catch(error => console.log(error))
})

module.exports = router