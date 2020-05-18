const http = require('http')



const server = http.createServer((req, res)=>{
  res.setHeader('Content-Type', 'application/json')
  res.end(
    {
      "foo":"foo"
    }
  )
})

const PORT = 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

/*
[nodemon] starting `node 4b-content-type--application-json--invalid.js`
Server running on port 5000
_http_outgoing.js:705
      throw new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer'], chunk);
      ^

TypeError [ERR_INVALID_ARG_TYPE]: The "chunk" argument must be one of type string or Buffer. Received type object
*/

