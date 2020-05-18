const http = require('http')


const server = http.createServer((req, res)=>{
  let body
  const chunks = []
  req.on('data', chunk => {
    chunks.push(chunk)
  }).on('end', () => {
    body = Buffer.concat(chunks).toString()
    console.log('body: ', body)     // { "foo":"foo" }

    res.writeHead(200,
      {
        'Content-Type': 'application/json',
        'X-Powered-By': 'Node.js'
      }
    )

    res.end()
  })

})

const PORT = 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

/*

  curl \
    -H "Content-Type: application/json" \
    -X POST \
    -d '{"foo":"foo"}' \
    http://localhost:5000

  echo '{"foo":"foo"}' | http POST localhost:5000

*/

