var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState : function () {
    return {
      isLoading : false
    }
  },
  handleSearch : function (location) {
    console.log("WR__ WeatherJSX PRIOR to setState PASSED IN location is : ", location);
    console.log("WR__ WeatherJSX PRIOR to setState this.state.location is : ", this.state.location);
    // onSearch call, from WeatherForm, parent function here in Weather parent
    // alert(location);
    // this.setState({
    //   location: location,
    //   temp: 64
    // });
    // Hmm, is this too soon? Tink so.

    var thatWR__ = this;
  //  debugger; //woot

    this.setState({ isLoading: true });

    openWeatherMap.getTemp(location).then(function (temp) {
      thatWR__.setState({
        location: location,
        temp: temp
      });
      thatWR__.setState({ isLoading: false });
    }, function (errorMessage) {
      thatWR__.setState({
        location: '',
        temp: '',
        isLoading : false,
      });
      alert(errorMessage);
    })


    console.log("WR__ WeatherJSX apres setState this.state.location is : ", this.state.location);
  },
  render : function () {
    var {isLoading, location, temp} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather for ya...</h3> ;
      } else if (temp && location) {
{/*         return <WeatherMessage location={this.state.location} temp={this.state.temp}/> ; */}
          return <WeatherMessage location={location} temp={temp}/> ;
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
