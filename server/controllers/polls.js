var mongoose = require('mongoose');
var Survey = mongoose.model('Survey');

module.exports = (function() {
	return {
		show: function(req, res){
			Survey.find({}, function(err, polls){
				if(err){
					res.json(err);
				}else {
					res.json(polls)
				}
			})
		},

		add: function(req,res){
			var survey = new Survey(req.body);
			survey.save(function(err){
				if(err) {
					res.json(err);
				}
				else {
					res.json({success: true, message: "Question was successfully added!"})	
				}
			})
		},
		remove: function(req, callback){
			console.log(req);
			Survey.remove({_id: req}, function(err){
				if(err){
					console.log('something went wrong');
				}
				else {
					callback({success: true})
				}
			})
		}
	}
})();