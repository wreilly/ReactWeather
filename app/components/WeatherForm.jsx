var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit : function (event) {
    event.preventDefault();

    var location = this.refs.citynameref.value;
    console.log("WR__ WeatherFORM this.refs.citynameref.value is : ", location);

    if(location.length > 0) {
      this.refs.citynameref.value = '';
      this.props.onSearch(location); // call parent func
    }
  },
  // WR__ not used; superduperseded by onFormSubmit
  // getTemp : function (e) {
  //   e.preventDefault();
  //   // t.b.d.
  //   var city = this.refs.citynameref.value;
  //   console.log("WR__ Did we get here? getTemp() : city: ", city);
  // },
  render : function () {
    return (
      <div>
        <h3>WeatherForm component</h3>
        <form onSubmit={this.onFormSubmit}>
          <input type="search" placeholder="What city?" ref="citynameref"/>
          <button className="button hollow expanded">Get that temperature</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
