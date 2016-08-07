var express = require('express');

// Create our app ANDREW_MEAD_CODE
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
	console.log("WR__ 0000 BEFORE IF : req.protocol : "  + req.protocol);
//  if (req.protocol                     === 'https') { // DOES NOT (reliably ??) WORK
    if (req.headers['x-forwarded-proto'] === 'https') { // WORKED

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
