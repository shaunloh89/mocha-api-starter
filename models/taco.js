const mongoose = require('mongoose')

const TacoSchema = new mongoose.Schema({
  name: String,
  amount: String,
  calorie: Number
})

const Taco = mongoose.model('Taco', TacoSchema)

module.exports = Taco
