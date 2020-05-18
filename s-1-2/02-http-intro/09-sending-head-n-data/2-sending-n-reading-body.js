const http = require('http')


const server = http.createServer((req, res)=>{
  res.writeHead(200,
    {
      'Content-Type': 'application/json',
      'X-Powered-By': 'Node.js'
    }
  )

  let body

  const chunks = []
  req.on('data', chunk => {
    chunks.push(chunk)
  }).on('end', () => {
    const buffer = Buffer.concat(chunks)
    console.log('buffer: ', buffer) // <Buffer 7b 0a 09 22 66 6f 6f 22 3a 22 66 6f 6f 22 0a 7d>

    body = buffer.toString()
    console.log('body: ', body)     // { "foo":"foo" }
  })

  res.end()
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

