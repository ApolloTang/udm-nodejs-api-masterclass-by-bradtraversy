const express = require('express')
const dotenv = require('dotenv')


// Load env vars
dotenv.config({ path: './config/config.env' })

const app = express();

app.get('/text', (req, res)=>{
  res.send('hello from express')
  // when you pass text express responses with Content-Type: text/html
  //
  //   Content-Type: text/html; charset=utf-8
  //   X-Powered-By: Express
  //
  //   hello from express
  //
})

app.get('/object', (req, res)=>{
  res.send({foo:'foo'})
  // when you pass object express responses with Content-Type: application/json
  //
  // Note: you dont need to wrap object in JSON.stringify
  //
  //   Content-Type: application/json; charset=utf-8
  //   X-Powered-By: Express
  //
  //   {
  //     "foo": "foo"
  //   }
})

app.get('/json', (req, res)=>{
  res.json({foo:'foo'})
  // same as :
  //   res.send({foo:'foo'})
})

app.get('/json-with-status', (req, res)=>{
  res.status(400).json({success: false})
  // You can override the default status:
  //
  //   HTTP/1.1 400 Bad Request
  //   Content-Type: application/json; charset=utf-8
  //   X-Powered-By: Express
  //
  //   {
  //       "success": false
  //   }
})

app.get('/send-status', (req, res)=>{
  res.sendStatus(400).json('this json() method is is ignored')
  //                 ^ this is ignored
  //
  // If you want to just send status
  //
  //   HTTP/1.1 400 Bad Request
  //   Content-Type: text/plain; charset=utf-8
  //   X-Powered-By: Express
  //
  //   Bad Request
  //
})

const PORT = process.env.NODE_PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)

