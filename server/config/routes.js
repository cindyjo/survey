module.exports = function(app) {
// Appointments	
  	var polls = require('../controllers/polls.js');
    // Show
	app.get('/polls', function(req, res) { 
		polls.show(req,res);
	});
	// Add
	app.post('/polls', function(req, res) { 
		console.log('route');
		polls.add(req, res);
	});
	//delete
	app.delete('/polls/:id', function(req, res){
		polls.remove(req.params.id, function(err, data){
			if(err){
				console.log(err);
			}
			res.json(data);
		})
	});
	
// WILDCARD Redirect to Mask unused urls.
	app.get('/*', function(request, response){
		response.redirect('/')
		response.render('/')
	})
	app.post('/*', function(request, response){
		response.redirect('/')
	})

}