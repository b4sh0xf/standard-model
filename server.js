const express        = require('express')
const mongoose       = require('mongoose')
const cors           = require('cors')
const particleRoutes = require('./routes/routes')
const seedParticles  = require('./models/seed')
const port           = 3000

require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/particles', particleRoutes)

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('[+] mongo online')
    await seedParticles()
    app.listen(port, () => console.log(`[+] running on http://localhost:${port}`))
  })
  .catch(err => console.error(err))
