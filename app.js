
var express = require('express')
     , http = require('http')
     , path = require('path');

var app = express()
, routes = require('./routes')(app);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.compress());
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

/*var forecast = new Forecast({
    service: 'forecast.io'
  , key: 'adeacb50ac56539da9a5c4d5f7cf602a'
  , units: 'celcius' // Only the first letter is parsed so you can type Fahrenheit, Celcius, centigrade, FahrenPoop, etc.
  , cache: true      // Cache API requests?
  , ttl: {           // How long to cache requests. Uses syntax from moment.js: http://momentjs.com/docs/#/durations/creating/
        minutes: 27
      , seconds: 45
    }
});

forecast.get([-33.8683, 151.2086], function(err, weather) {
  if(err) console.dir(err);
  else console.dir(weather);
});*/

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
