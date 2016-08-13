var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
      return (
        <div>
          <h3 className="text-center page-title">About</h3>
          {/* http://foundation.zurb.com/sites/docs/typography-helpers.html */}
          <p className="text-right">This is a development site.</p>
          <p>You can get the <Link to="/?location=Philadelphia">temperature in Philadelphia</Link> if you click here.</p>
          <p className="">Further information:</p>
          <ul>
            <li>
              <a href="https://openweathermap.org/">OpenWeatherMap</a>
            </li>
          </ul>
        </div>
      );
};

// *** STATELESS FUNCTIONAL COMPONENT
// var About = (props) => {
//       return (
//         <div>
//           <h3>About</h3>
//           <p>First paragraph about our site...</p>
//         </div>
//       );
// };


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
