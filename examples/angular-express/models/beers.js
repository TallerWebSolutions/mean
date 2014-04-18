/**
 * Schema definition.
 */

var db = require('../db'),
    mongoose = require('mongoose');

var Beer = mongoose.model('Beer', new mongoose.Schema({
    name: { type: String, default: '' },
    description: { type: String, default: '' },
    alcohol: { type: Number, min: 0},
    category: { type: String, default: ''},
    created: { type: Date, default: Date.now }
  }));

exports = Beer;
