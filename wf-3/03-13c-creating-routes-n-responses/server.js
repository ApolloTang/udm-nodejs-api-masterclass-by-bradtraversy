const express = require('express')
const dotenv = require('dotenv')


// Load env vars
dotenv.config({ path: './config/config.env' })

const app = express();

app.get('/api/v1/bootcamps', (req, res)=>{
  res.status(200).json({ success: true, msg: 'Show all bootcamps'})
})
  // $ curl -v http://localhost:5000/api/v1/bootcamps
  // > GET /api/v1/bootcamps HTTP/1.1
  // > Host: localhost:5000
  // >
  // < HTTP/1.1 200 OK
  // < X-Powered-By: Express
  // < Content-Type: application/json; charset=utf-8
  // {"success":true,"msg":"Show all bootcamps"}* Closing connection 0



app.get('/api/v1/bootcamps/:id', (req, res)=>{
  res.status(200).json({ success: true, msg: `Show bootcamp ${req.params.id}`})
})
  // $ curl -v http://localhost:5000/api/v1/bootcamps/1234
  // > GET /api/v1/bootcamps/1234 HTTP/1.1
  // > Host: localhost:5000
  // >
  // < HTTP/1.1 200 OK
  // < X-Powered-By: Express
  // < Content-Type: application/json; charset=utf-8
  // < Date: Sun, 17 May 2020 21:00:37 GMT
  // < Connection: keep-alive
  // <
  // * Connection #0 to host localhost left intact
  // {"success":true,"msg":"Get bootcamp 1234"}* Closing connection 0



app.post('/api/v1/bootcamps', (req, res)=>{
  res.status(200).json({ success: true, msg: 'Create new bootcamp'})
})
  // $ curl -vH "Content-Type: application/json" -X POST http://localhost:5000/api/v1/bootcamps
  // > POST /api/v1/bootcamps HTTP/1.1
  // > Host: localhost:5000
  // > Content-Type: application/json
  // >
  // < HTTP/1.1 200 OK
  // < X-Powered-By: Express
  // < Content-Type: application/json; charset=utf-8
  //
  // * Connection #0 to host localhost left intact
  // {"success":true,"msg":"Create new bootcamp"}* Closing connection 0



app.put('/api/v1/bootcamps/:id', (req, res)=>{
  res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}`})
})
  // $ curl -vH "Content-Type: application/json" -X PUT http://localhost:5000/api/v1/bootcamps/1234
  // > PUT /api/v1/bootcamps/1234 HTTP/1.1
  // > Host: localhost:5000
  // > Content-Type: application/json
  // >
  // < HTTP/1.1 200 OK
  // < X-Powered-By: Express
  // < Content-Type: application/json; charset=utf-8
  // <
  // * Connection #0 to host localhost left intact
  // {"success":true,"msg":"Update bootcamp 1234"}* Closing connection 0


app.delete('/api/v1/bootcamps/:id', (req, res)=>{
  res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}`})
})
  // $ curl -v -X DELETE http://localhost:5000/api/v1/bootcamps/1234
  // > DELETE /api/v1/bootcamps/1234 HTTP/1.1
  // > Host: localhost:5000
  // >
  // < HTTP/1.1 200 OK
  // < X-Powered-By: Express
  // < Content-Type: application/json; charset=utf-8
  // <
  // * Connection #0 to host localhost left intact
  // {"success":true,"msg":"Delete bootcamp 1234"}* Closing connection 0


const PORT = process.env.NODE_PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)

