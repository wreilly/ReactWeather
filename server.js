var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {

	// HTTPS = Not OK. Make it http
  if (req.protocol === 'https') {
		res.redirect('http://' + req.hostname + req.url);
	} else  // HTTP = OK
	{
		next();
	}
});

app.use(express.static('public'));

app.listen(PORT, function () {
	console.log('Express server is up on port ' + PORT + '. Have Weather fun.');
    });
