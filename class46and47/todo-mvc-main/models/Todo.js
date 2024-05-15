const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  }
})

module.exports = mongoose.model('Todo', TodoSchema)

//this file is used to define the structure of a docuemnt, and includes validation for the properties. As well as sets up each document in the todos collection to use mongoose.