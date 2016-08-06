var names = ['Will', 'Jane', 'Anton'];

names.forEach(function (name) {
  console.log('forEach', name);
});

names.forEach((name) => {
  console.log('arrowFunc', name);
  console.log('otherwise');
});

names.forEach((name) => console.log('leanArrow', name));

var returnMe = (name) => name + '!';
console.log(returnMe('AndyBandy'));

// THIS stuff
// ANONYMOUS Function: this is updated, no longer refers to the parent object. (Q. Hmm, what does it refer to ??) A. I guess it isn't referring to a Damn Thing!
// FAT ARROW Function: this is not updated. it still refers to the parent object. Here: 'person'. So this.name is 'Wilhelm'
var person = {
  name : 'Wilhelm',
  greet : function () {
    // ANONYMOUS:
    names.forEach(function (name) {
      console.log(this.name + ' says hi to ' + name); // undefined says hi to Will
    })
    // FAT ARROW:
    names.forEach( (name) => {
      console.log(this.name + ' says hi to ' + name); // Wilhelm says hi to Will
    })
  }
};

person.greet();

// CHALLENGE:
function add (a, b) {
  return a + b;
}

// addStatement
var addStatement = (a, b) => {
   return a + b; // YES. Gotta have 'return'
}
// var addStatement = (a, b) => {
//    a + b; // NOPE: undefined
// }

// addExpression
// var addExpression = ((a, b) => a + b); // WOIKS
var addExpression = (a, b) => a + b; // WOIKS

console.log(add(1, 3));
console.log(add(9, 0));
console.log(addStatement(10, 3));
console.log(addExpression(1, 300));
