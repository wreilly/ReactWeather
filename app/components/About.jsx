var React = require('react');

// Yes, works.
var About = (props) => {
      return <h3>About component</h3>;
};

module.exports = About;

// NOPE!
/*
Warning: About(...): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.w
Uncaught Invariant Violation: About(...): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.
*/
// var About = (props) => {
//       <h3>About component </h3>
// };


// WORKS:
// var About = (props) => {
//   return (
//     <div>
//       <h3>About component </h3>
//       {props.children} <<<< But what ARE these props, ??? ???
//     </div>
//       )
// };



// OLD WAY:
// var React = require('react');
//
// var About = React.createClass({
//   render : function () {
//     return (
//       <h3>About component</h3>
//     );
//   }
// });
//
// module.exports = About;
