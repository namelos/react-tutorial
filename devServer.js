const path = require('path')
const express = require('express')
const webpack = require('webpack')
const config = require('./webpack.config')
const app = express()

app.use(require('webpack-dev-middleware')(webpack(config), {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'index.html')))

app.listen(3000, err =>
  console.log(
    err ?
      `Error: ${ err }` :
      'listening at http://localhost:3000'))
