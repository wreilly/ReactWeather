var axios = require('axios'); // weather api stuff

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=994d33c38b9a1a2fd4c2c383df04e584&units=imperial';

/*
OpenWeatherMap wreilly ll o Udemy Angular class; React class
API KEY: 994d33c38b9a1a2fd4c2c383df04e584
e.g.
http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=994d33c38b9a1a2fd4c2c383df04e584&units=imperial
main: {
temp: 69.21, // temp: 293.78, <<< Kelvin
pressure: 1021,
humidity: 53,
temp_min: 291.48,
temp_max: 295.37
},
*/
module.exports = {
  getTemp : function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl =`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}` ; // JavaScript expression ? inside `${}`
    return axios.get(requestUrl).then(function (response) {

      // debugger;

      // edge cases for OpenWeatherMap
      if (response.data.cod && response.data.message) {
        // Something wrong!
        throw new Error(response.data.message);
      } else {
        return response.data.main.temp; // << 69.21 deg F :o)
      }
    }, function (response) {
      throw new Error(response.data.message);
    })
  }
};
