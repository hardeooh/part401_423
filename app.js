const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const blogsRouter = require('./routes/blog')
const config = require('./utils/config')
const logger = require('./utils/logger')
app.use(cors())
app.use(express.json())

app.use('/api/blogs', blogsRouter)

morgan.token('id', function getId (req) {
  return req.id
})

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT} frontend`)
})


