var React = require('react');
var {Link, IndexLink} = require('react-router');


// CSS note: JSX uses attribute 'class' for various purposes
// So for HTML CSS 'class' we must use 'className'

var Nav = React.createClass({
  onSearch : function (event) {
    event.preventDefault();
    alert('Not yet wire up (Search)');
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight : 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
                <Link to="/about" activeClassName="active" activeStyle={{fontWeight : 'bold'}}>About</Link>
            </li>
            <li>
                <Link to="/examples" activeClassName="active" activeStyle={{fontWeight : 'bold'}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="What city?" />
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather/Temp" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
