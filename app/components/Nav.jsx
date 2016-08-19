var React = require('react');
var {Link, IndexLink} = require('react-router');


// CSS note: JSX uses attribute 'class' for various purposes
// So for HTML CSS 'class' we must use 'className'

var Nav = React.createClass({


  onSearch : function (event) {
    var citysoughtref = this.refs.citysought.value; // woot
    console.log("WR__ 99 this.refs.citysought.value: ", citysoughtref);
    event.preventDefault();
//    alert('01 Not yet wired up (Search)');
//    alert('02 halfway...Not yet wired up, but here\'s the city you sought: ' + citysoughtref + '!!');
    // ENCODE URL e.g. %20 for ' '
    var encodedLocation = encodeURIComponent(citysoughtref);

    if (citysoughtref.length > 0) {
      this.refs.citysought.value = ''; // clear the search refs
      window.location.hash = '#/?location=' + encodedLocation;
    }

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
                <input type="search" placeholder="What city?" ref="citysought"/>
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
