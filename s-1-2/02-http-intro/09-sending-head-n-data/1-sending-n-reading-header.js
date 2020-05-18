const http = require('http')


const todos = [
  { id: 1, text: 'Todo one'},
  { id: 2, text: 'Todo two'},
  { id: 3, text: 'Todo three'},
]

const server = http.createServer((req, res)=>{
  res.writeHead(200,
    {
      'Content-Type': 'application/json',
      'X-Powered-By': 'Node.js'
    }
  )

  console.log('xxx header: ', req.headers)
    // xxx header:  {
    //   host: 'localhost:5000',
    //   'user-agent': 'curl/7.64.1',
    //   accept: '*/*',
    //   foo: 'Foo',
    //   authorization: 'sdfafadfafdaf'
    // }

    // xxx header:  {
    //   host: 'localhost:5000',
    //   'user-agent': 'HTTPie/2.1.0',
    //   'accept-encoding': 'gzip, deflate',
    //   accept: '*/*',
    //   connection: 'keep-alive',
    //   foo: 'foo',
    //   authorization: 'fafssafdasdfad'
    // }

  res.end(
    JSON.stringify( {
      success: true,
      data: todos
    })
  )
})

const PORT = 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

/*

curl -i -H "Foo: Foo" -H "Authorization: sdfafadfafdaf" localhost:5000

http localhost:5000 Foo:foo authorization:fafssafdasdfad

*/

