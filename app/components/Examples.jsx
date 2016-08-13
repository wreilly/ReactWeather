var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
  render : function () {
    return (
      <div>
        <h1 className="text-center page-title">Examples</h1>
        <p>Here are a few example locations to try:</p>
        <ol>
          <li>
              <Link to='/?location=Boston'>Boston, MA</Link>
          </li>
          <li>
            <Link to='/?location=Cambridge'>Cambridge, MA</Link>
          </li>
          <li>
            <Link to='/?location=Rio'>Rio, Brazil</Link>
          </li>
        </ol>
      </div>
    );
  }
});

module.exports = Examples;
