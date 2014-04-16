/**
 * Scheme definition.
 */

var db = require('./db'); // mongoose.

module.exports = {
  
  /**
   * Beer scheme.
   */
  Beer: db.model('Beer', new db.Schema({
    name: { type: String, default: '' },
    description: { type: String, default: '' },
    alcohol: { type: Number, min: 0},
    category: { type: String, default: ''},
    created: { type: Date, default: Date.now }
  }))
};
