const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortSchema = new Schema({
    url_original: {
        type: String,
        require: true
    },
    url_short: {
        type: String,
        require: true
    }
})
module.exports = mongoose.model('Short', shortSchema)