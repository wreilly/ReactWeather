var React = require('react');

// ES6 destructuring syntax EVEN SHORTER CUT:
var WeatherMessage = ({temp, location}) => {

// ES6 destructuring syntax: ALREADY KINDA OLD SCHOOL: (!)
// var WeatherMessage = (props) => {
  // var {temp, location} = props;

  // OLD SCHOOL ES5-ish: (no destructuring biz shown here)
  // var temp = props.temp;
  // var location = props.location;

  return (
    <div>
      <h3 className="text-center">Temp today? Whoa. refactored</h3>
      <ul>
   <li>Where: {location}</li>
   <li>How Muchies: {temp}</li> {/* */}
      </ul>
  </div>
  );
};

module.exports = WeatherMessage;


{/* Oh good grief. "location" has become the browser window location bar URL thing!

Error: uncaught invariant violation: objects are not valid as a react child (found: object with keys)

  WR__ WeatherMessage this.props.location is :  Location {hash: "#/?_k=gkpc2z", search: "", pathname: "/", port: "3000", hostname: "127.0.0.1"…}

"this" is Window!
Hmm, what about that lowercase 'l' vs. uppercase 'L' ? ...
Bizzarro.
  */}

// OLD WAY:
// var WeatherMessage = React.createClass({
//   render : function () {
//     var temp = this.props.temp;
//     var location = this.props.location;
//     console.log("WR__ WeatherMessage this.props.location is : ", location);
//
//
//     return (
//       <div>
//         <h3>Temp today? Whoa.</h3>
//         <ul>
//
//      <li>Where: {location}</li>
//      <li>How Muchies: {temp}</li> {/* */}
//         </ul>
//     </div>
//     );
//   }
// });
