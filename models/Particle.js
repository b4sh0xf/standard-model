const mongoose = require('mongoose')

const particleSchema = new mongoose.Schema({
  _id: String,
  name: String,
  symbol: String,
  type: String,
  mass: String,
  charge: String,
  spin: String,
  interactions: [String]
})

module.exports = mongoose.model('Particle', particleSchema)
