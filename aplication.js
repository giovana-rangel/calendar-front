const express = require('express')
const corser = require('corser')
const path = require('path')
const history = require('connect-history-api-fallback')

const app = express()
app.disable('x-powered-by')

app.use(history())
app.use(corser.create())
app.use(express.static(path.join(__dirname, '/dist')))
app.options('*', function (_req, res) {
  // CORS
  res.writeHead(204)
  res.end()
})

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

// Used for App health checking
app.get('/sys/info/ping', function (_req, res, _next) {
  res.end('"OK"')
})

const port = 8080
const server = app.listen(port, function () {
  console.log('App started at: ' + new Date() + ' on port: ' + port)
})
module.exports = server