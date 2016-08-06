var React = require('react');
var ReactDOM = require('react-dom');

// ES6 destructuring ... just pull out the what, methods you want from the module ...
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// ES5 equivalent
// var Route = require('react-router').Route;
// var Router = require('react-router').Router;
// ...
var Main     = require('Main');
// var Nav = require('Nav');
var Weather  = require('Weather');
var About    = require('About');
var Examples = require('Examples');

ReactDOM.render(
  <div>
    <Router history={hashHistory}>
      <Route path="/" component={Main}> // JSX Expression inside {}
        <Route path="examples" component={Examples} />
        <Route path="about"    component={About} />
        <IndexRoute component={Weather}/>
      </Route>
    </Router>
    {/* // Nope:
         // <Router history={hashHistory}>
      //   <Route path="/nav" component={Nav}>
      //   </Route>
      // </Router>
      */}
  </div>,
  document.getElementById('app')
);
