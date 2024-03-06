/*
============================================
; Title:  brumfield-team.js 
; Author: Professor Krasso
; Date: 4. March, 2024
; Modified by: Joanna Brumfield
; Description: Team schema
;===========================================
*/

 //mongoose
const mongoose = require('mongoose');

//mongoose.Schema object. 
const Schema = mongoose.Schema;

//player schema
const playerSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  }
});

//team schema
const teamSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  mascot: {
    type: String,
    required: true
  },
  players: [playerSchema], 
}, {
  collection: 'teams'
});

//export it using module.exports
module.exports = mongoose.model('Team', teamSchema);