 const mongoose = require('mongoose');

const launchesSchema = new mongoose.Schema({
  flightNumber: { type: Number, required: true},
  launchDate: {type: Date, required: true},
  mission: { type: String, require: true},
  rocket: { type: String, require: true},
  target: {
    type: String,
    required: true
  },
  upcoming:{
    type: Boolean,
    required: true
  },
  success:{
    type: Boolean,
    required: true,
    default: true
  },
  customers: {
    type: [String]
  }
})