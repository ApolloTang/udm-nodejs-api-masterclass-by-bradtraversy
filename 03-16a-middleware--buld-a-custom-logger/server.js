const express = require('express')
const dotenv = require('dotenv')

// Route files
const bootcamps = require('./routes/bootcamps')

// Load env vars
dotenv.config({ path: './config/config.env' })

const app = express();

const logger = (req, res, next) => {
  const {method, originalUrl} = req

  const protocal = req.protocal // get undefined, should return either 'http' or 'https'
  console.log('req.protocal: ', protocal)

  // This does not work:
  //   const get = req.get
  //   const host = get('host')

  // This does not work:
  //   const {get} = req
  //   const host = get('host')

  // This work:
  const host = req.get('host')
  console.log('req.host: ', host) // localhost:5000

  console.log( `${method} ${req.protocal}://${req.get('Host')}${originalUrl}`)
  next()
}

app.use(logger)

// Mount routers
app.use('/api/v1/bootcamps', bootcamps)

const PORT = process.env.NODE_PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)

