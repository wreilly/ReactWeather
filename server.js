var express = require('express');

// Create our app
var app = express();
// ES6 const. value can't be changed.
const PORT = process.env.PORT || 3000;
// hard-coding for local
// Heroku will pass PORT in ...

// Express middleware -- with every Request:
app.use(function (req, res, next) {
	// HTTP = OK
	if (req.headers['x-forwarded-proto'] === 'http') {
		next();
	} else  // HTTPS = Not OK. Make it http
	{
		res.redirect('http://' + req.hostname + req.url);
	}
});

app.use(express.static('public'));



app.listen(PORT, function () {
	console.log('Express server is up on port ' + PORT + '. Have Weather fun.');
    });
