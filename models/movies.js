const mongoose = require('mongoose')

const moviesSchema = mongoose.Schema({
    title: { type: String, required: true },
    runtime: { type: Number, required: true },
    genre: { type: String, required: true },
    poster: { type: Image, required: true },
    actors: { type: String, required: true }

})



module.exports = mongoose.model('Movie', moviesSchema)