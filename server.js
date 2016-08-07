var express = require('express');

// Create our app
var app = express();
// ES6 const. value can't be changed.
const PORT = process.env.PORT || 3000;
// hard-coding for local
// Heroku will pass PORT in ...

// Express middleware -- with every Request:
// &&&&&&&&&&&&&&&&&&&&&&&&
app.use(function (req, res, next) {
			console.log("WR__ 00 req.hostname + req.url + req.protocol + req.secure : "  + req.hostname + " : " + req.url + " : " + req.protocol + " : " + req.secure);
			console.log("WR__ 00A PORT STUFF req.hostname + :PORT + req.url : "  + req.hostname + ":" + PORT + req.url);

// &&&&&&&&&&&&&&&&&&&&&&&&

/*
wreillymc-l:ReactWeather william.reilly$ node server.js
Express server is up on port 3000. Have Weather fun.
WR__ 00 req.hostname + req.url + req.protocol + req.secure : 127.0.0.1 : / : http : false
WR__ 01 else res.redirect('http://' + req.hostname + req.url: 127.0.0.1 : /

*/


	// HTTP = OK
	// NOT WORKING! ! !  if (req.headers['x-forwarded-proto'] === 'http') {
// &&&&&&&&&&&&&&&&&&&&&&&&
  if (req.protocol === 'http') {
		console.log("WR__ 01 HTTP IF. NEW RE-ROUTE req.hostname + req.url + req.protocol + req.secure : "  + req.hostname + " : " + req.url + " : " + req.protocol + " : " + req.secure);
		// SEEMINGLY VERY REDUNDANT!
		// BUT EVEN HTTPS:// IS COMING INTO THIS 'IF'. ?? HMM.
		// LET'S FORCE THOSE HTTPS:// TO GO TO HTTP://
		// WHILE THE HTTP:// GET RE-ROUTED (OH WELL) TO HTTP://
// //			res.redirect('http://' + req.hostname + req.url);
// //    res.redirect('http://' + req.hostname + ":" + PORT + req.url);

// OOPS. Guess they thought of that: ERR_TOO_MANY_REDIRECTS !
// But at least I'm landing on PORT 3000 now.
// Sheesh.

		next();
	} else  // HTTPS = Not OK. Make it http
	{
		console.log("WR__ 02 HTTP S ELSE res.redirect('http://' + req.hostname + req.url: "  + req.hostname + ":" + PORT + req.url);

// console.log("WR__ 00A PORT STUFF req.hostname + :PORT + req.url : "  + req.hostname + ":" + PORT + req.url);
		res.redirect('http://' + req.hostname + ":" + PORT + req.url);
	}
});
// &&&&&&&&&&&&&&&&&&&&&&&&

app.use(express.static('public'));



app.listen(PORT, function () {
	console.log('Express server is up on port ' + PORT + '. Have Weather fun.');
    });
