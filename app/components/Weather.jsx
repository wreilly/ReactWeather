var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
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

// hmm shouldn't that be thatWR__.setState ?? ??
// Nope - instructor code has it as this.setState
// I guess the "this onto that" bit is for inside nested functions...
// callbacky - promisey stuff
    this.setState({
      isLoading: true,
      errorMessage : undefined,
      location: undefined, // clear out these values too
      temp: undefined,
     });

    openWeatherMap.getTemp(location).then(function (temp) {
      thatWR__.setState({
        location: location,
        temp: temp
      });
      thatWR__.setState({ isLoading: false }); // can be in same setState above, ya know!
    }, function (wr__errorMessage) {
      console.log("WR__ @@@ wr__errorMessage.message: ", wr__errorMessage.message); // "Error: Not found city(...)"
      thatWR__.setState({
        // should these 2 still be emptied out here ? They're not in instructor code
        location: '',
        temp: '',
        isLoading : false,
        errorMessage : wr__errorMessage.message,
      });
      // alert(errorMessage); // We're using Modal now
    });


    console.log("WR__ WeatherJSX apres setState this.state.location is : ", this.state.location);
  },

  componentDidMount: function () {
    var location = this.props.location.query.location; // location in URL ;
    if (location && location.length > 0 ) {
      this.handleSearch(location);
      window.location.hash = '#/'; // clean up URL after search
    }
  },
  // same code from componentDidMount here in componentWillReceiveProps
  // Props don't change in a component, BUT, the parent
  // CAN change the props on child. Hmm.
  componentWillReceiveProps: function (newProps) {
    var location = newProps.location.query.location; // location in URL ;
    if (location && location.length > 0 ) {
      this.handleSearch(location);
      window.location.hash = '#/'; // clean up URL after
    }
  },
  render : function () {
    var {isLoading, errorMessage, location, temp} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather for ya...</h3> ;
      } else if (temp && location) {
{/*         return <WeatherMessage location={this.state.location} temp={this.state.temp}/> ; */}
          return <WeatherMessage location={location} temp={temp}/> ;
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        console.log("WR__ @@@ typeof errorMessage === 'string': ", typeof errorMessage); //
        return (
          <ErrorModal message={errorMessage} / >
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
