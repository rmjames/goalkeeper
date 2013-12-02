
module.exports = function(app){
			app.get('/', function(req,res){
				res.render('home');
			});
			app.get('/input', function(req,res){
  			res.render('./input',{
    		title: 'Toolkit'});
			});
			app.get('/music', function(req,res){
				res.render('music')
			});
			app.get('/location', function(req,res){
				res.render('location')
			});
			app.get('/settings', function(req,res){
				res.render('settings')
			});
			app.get('/profile', function(req,res){
				res.render('profile')
			});
			app.get('/security', function(req,res){
				res.render('security')
			});
		}