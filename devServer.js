const path = require('path')
const express = require('express')
const webpack = require('webpack')
const config = require('./webpack.config')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const randomString = () => {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text
}

app.use(require('webpack-dev-middleware')(webpack(config), {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.get('/api', (req, res) => {
  return res.json({
    name: req.query.name || 'wrong name!',
    email: `${randomString()}@${randomString()}.com`,
    address: randomString() + randomString()
  })
})


app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'index.html')))

app.listen(3000, err =>
  console.log(
    err ?
      `Error: ${ err }` :
      'listening at http://localhost:3000'))
