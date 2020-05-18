// @desc   Logs request to console
const logger = (req, res, next) => {
  const {method, originalUrl} = req

  // const protocal = req.protocal // get undefined, should return either 'http' or 'https'
  // console.log('req.protocal: ', protocal)

  // This does not work:
  //   const get = req.get
  //   const host = get('host')

  // This does not work:
  //   const {get} = req
  //   const host = get('host')

  // This work:
  // const host = req.get('host')
  // console.log('req.host: ', host) // localhost:5000

  console.log( `${method} ${req.protocal}://${req.get('Host')}${originalUrl}`)
  next()
}

module.exports = logger
