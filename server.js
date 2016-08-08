var express = require('express');

// var lilInspector = require('lilInspector');
function lilInspector(yourObject, yourObjectVariableName_kids) {
// exports.lilInspector = function (yourObject, yourObjectVariableName_kids) {
    var lilKey; // we won't even initiate. what Type is a key, anyway? String? Hmm
    var lilObject = yourObject; // pros? cons? of doing this?
    console.log("!!!! lilInspector !!!!");
    // Hmm. would like to print the variable name to console. Possible?
    // Google: JavaScript can I get variable name of an object?
    // Hmm, looking like this is (ahem), "NOT DONE." S'allright.
    console.log("yourObject = lilObject = " + lilObject);
    // FAIL		console.log("fieldsToBeUpdated = NAME = " + fieldsToBeUpdated.constructor.name); // (empty. nothing.)
    // FAIL         console.log("yourObject = NAME = " + yourObject.constructor.name.name); // [object Object]
    // FAIL         console.log("yourObject = NAME = " + yourObject.constructor.name.name); // undefined
    // FAIL          console.log("lilObject = NAME = " + lilObject.constructor.name); // [object Object]

    /* ********* AWRIGHT. All that 'name' crap above FAILED.
       Now we're just PASSING THE DAMNED THING IN.
       yourObjectVariableName_kids

    */
    if (yourObjectVariableName_kids) { // If we passed it in...
	var objectVariableNameThisTime = yourObjectVariableName_kids;
	console.log("!!!!****!!!!");
	console.log("objectVariableNameThisTime : " + objectVariableNameThisTime); }
    else {
	console.log("You forgot to pass in the yourObjectVariableName_kids, kid. No big deal.");
    }
    for (lilKey in lilObject){
	if(lilObject.hasOwnProperty(lilKey)) {
	    console.log("!!!! lilInspector !!!!");
	    console.log("KEY : lilKey : " + lilKey);
	    console.log("VALUE : lilObject[lilKey] : " + lilObject[lilKey]);
	} else {
	    // do nuttin'
	}
    }
}










// Create our app ANDREW_MEAD_CODE
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
	console.log("WR__ 0000 BEFORE IF : req.protocol : "  + req.protocol);

/* ****** LILINSPECTOR TIME !!! **** */
console.log('****** LILINSPECTOR TIME !!! ****');
lilInspector(req.headers);
console.log('****** /LILINSPECTOR TIME !!! ****');


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
