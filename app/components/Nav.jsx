var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = () => {
  return (
    <div>
      <h3>Navigation Here 1</h3>
    <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight : 'bold'}}>Get Some Weather</IndexLink> |
    <Link to="/about" activeClassName="active" activeStyle={{fontWeight : 'bold'}}>Get Some About</Link> |
    <Link to="/examples" activeClassName="active" activeStyle={{fontWeight : 'bold'}}>Rots of Examples</Link>
    </div>
    );
};

module.exports = Nav;

// OLD WAY:
// var Nav = React.createClass({
//   render: function () {
//   return (
//     <div>
//       <h3>Navigation Here 1</h3>
// {/* Nope:          <p>heck go to / (home zat is)<a href="/">click</a></p>     */}
//     <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight : 'bold'}}>Get Some Weather</IndexLink> |
//     <Link to="/about" activeClassName="active" activeStyle={{fontWeight : 'bold'}}>Get Some About</Link> |
//     <Link to="/examples" activeClassName="active" activeStyle={{fontWeight : 'bold'}}>Rots of Examples</Link>
//     </div>
//     );
//   }
// });
//
