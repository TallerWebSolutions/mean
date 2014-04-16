var mongoose = require('mongoose'),
    config = require('./config.json');
mongoose.connect('mongodb://' + config.database.host + '/' + config.database.name);
 
var db = mongoose.connection;
db.on('error', function(err){
    console.log('Erro de conexao.', err)
});
db.once('open', function () {
  console.log('Conexão aberta.')
});
 
var Schema = mongoose.Schema;
 
var BeerSchema = new Schema({
  name: { type: String, default: '' },
  description: { type: String, default: '' },
  alcohol: { type: Number, min: 0},
  category: { type: String, default: ''},
  created: { type: Date, default: Date.now },
});
 
var Beer = exports.model = mongoose.model('Beer', BeerSchema);

var router = {
	'/beers': function (req, res) {
	    
	    Beer.find(function (err, data) {
			if (err) {
				var msg = 'ERROR!!!';
			}
			else {
				var msg = JSON.stringify(data);
			}
	      	res.end(msg);
	    });
	},
	'/beers/create': function (req, res) {
		var data = {
	      name: 'Skol',
	      description: 'Mijo de Rato',
	      alcohol: 79.5,
	      category: 'pilsen'
	    }

	    var model = new Beer(data);
	 
	    model.save(function (err, data) {
			if (err) {
				var msg = 'ERROR!!!';
			}
			else {
				var msg = JSON.stringify(data);
			}
	      	res.end(msg);
	    });
	},
	'/beers/update': function (req, res) {

		var query = {
			_id: '534ddd4a89758d7926a972ad'
		}

		var data = {
	      name: 'Pilsen',
	      description: 'Muito boa',
	      alcohol: 7.5,
	      category: 'pilsen'
	    }
	 
	    Beer.update(query, data, function (err, data) {
			if (err) {
				var msg = 'ERROR!!!';
			}
			else {
				var msg = JSON.stringify(data);
			}
	      	res.end(msg);
	    });
	},
	'/beers/remove': function (req, res) {

		var query = {
			_id: '534ddd4a89758d7926a972ad'
		}
	 
	    Beer.remove(query, function (err, data) {
			if (err) {
				var msg = 'ERROR!!!';
			}
			else {
				var msg = JSON.stringify(data);
			}
	      	res.end(msg);
	    });
	}
}

exports.beer = router;