var express = require('express');

// Create our app ANDREW_MEAD_CODE
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
	console.log("WR__ 0000 BEFORE IF : req.protocol : "  + req.protocol);
//  if (req.protocol                     === 'https') { // DOES NOT (reliably ??) WORK
    if (req.headers['x-forwarded-proto'] === 'https') { // WORKED

			/*
			https://dashboard.heroku.com/apps/serene-reef-47645/logs

			req.protocol thinks it is http
			req.headers['x-forwarded-proto'] knows that it is https

			2016-08-07T19:01:50.857115+00:00 heroku[router]: at=info method=GET path="/" host=serene-reef-47645.herokuapp.com request_id=0027fc8a-a5d6-4aff-8c6a-3b91a24dccac fwd="24.60.203.45" dyno=web.1 connect=1ms service=17ms status=302 bytes=349
			2016-08-07T19:01:50.843173+00:00 app[web.1]: WR__ 0000 BEFORE IF : req.protocol : http
			2016-08-07T19:01:50.843615+00:00 app[web.1]: WR__ 00 HTTP *S* IF : req.protocol : http
			2016-08-07T19:01:50.843663+00:00 app[web.1]: WR__ 01 HTTP *S* IF : req.headers['x-forwarded-proto']https

			*/

// WR__
console.log("WR__ 00 HTTP *S* IF : req.protocol : "  + req.protocol);
console.log("WR__ 01 HTTP *S* IF : req.headers['x-forwarded-proto']"  + req.headers['x-forwarded-proto']);
console.log("WR__ 02 HTTP *S* IF res.redirect('http://' + req.hostname + req.url: "  + req.hostname + " : " + req.url);

    res.redirect('http://' + req.hostname + req.url);
  } else {
		// WR__
		console.log("WR__ 00A HTTP ELSE : req.protocol : "  + req.protocol);

		console.log("WR__ 03 HTTP ELSE  : req.headers['x-forwarded-proto']"  + req.headers['x-forwarded-proto']); // undefined
		console.log("WR__ 04 HTTP ELSE (no redirect) req.hostname + req.url: "  + req.hostname + " : " + req.url); // 127.0.0.1 : /
		console.log("WR__ 05 HTTP ELSE  : req.headers THE LOT! : "  + req.headers); //  [object Object]
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
