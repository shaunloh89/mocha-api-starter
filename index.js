var express = require('express')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var mongoose = require('mongoose')
var tacosController = require('./controllers/tacos_controller')
var app = express()

mongoose.connect('mongodb://localhost/taco-api')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.send('hello mocha')
})

app.use('/tacos', tacosController)

app.listen(process.env.PORT || 3000)
console.log('Server UP at localhost 3000')

// we export the running server so we can use it in testing
module.exports = app
