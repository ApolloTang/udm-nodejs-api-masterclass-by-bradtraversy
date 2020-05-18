const http = require('http')

const todos = [
  { id: 1, text: 'Todo one'},
  { id: 2, text: 'Todo two'},
  { id: 3, text: 'Todo three'},
]

const server = http.createServer((req, res)=>{
  const { method, url } = req
  let body

  const chunks = []
  req.on('data', chunk => {
    chunks.push(chunk)
  }).on('end', () => {
    body = Buffer.concat(chunks).toString()

    // default
    let status = 404
    const response = { success: false, data: null, error: null }

    // cases:
    if ( method === 'GET' && url === '/todos') {
      status = 200
      response.success = true
      response.data = todos
    } else if ( method === 'POST' && url === '/todos') {
      const { id, text } = JSON.parse(body)

      if (!id || !text) {
        status = 400 // bad request
        response.error = 'id or text missing'
      } else {
        todos.push({id, text})
        status = 201 // create
        response.success = true
        response.data = todos
      }
    }

    res.writeHead( status, {
      'Content-Type': 'application/json',
      'X-Powered-By': 'Node.js'
    })

    res.end(JSON.stringify( response ))
  })

})

const PORT = 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

/*
  404
  ---
    curl localhost:5000/dont-exist

    http localhost:5000/dont-exist


  200
  ---
    curl localhost:5000/todos

    http  localhost:5000/todos

  201
  ---
    curl \
      -H "Content-Type: application/json" \
      -X POST \
      -d '{"id":"10", "text": "Todo four"}' \
      http://localhost:5000/todos

    echo '{"id":"10", "text": "Todo four"}' | http POST localhost:5000/todos

  400
  ---
    curl -v \
      -H "Content-Type: application/json" \
      -X POST \
      -d '{"id":"10"}' \
      http://localhost:5000/todos

    echo '{"id":"10"}' | http -v POST localhost:5000/todos
*/

