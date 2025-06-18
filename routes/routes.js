const express  = require('express')
const router   = express.Router()
const Particle = require('../models/Particle')

router.get('/', async (req, res) => {
  const particles = await Particle.find()
  res.json(particles)
})

router.get('/:id', async (req, res) => {
  const particle = await Particle.findById(req.params.id)
  if (particle) {
    res.json(particle);
  } else {
    res.status(404).json({ error: '[!] particle not found' })
  }
})

module.exports = router
