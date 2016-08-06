// /webpack.config.js (in root)
module.exports = {
//  entry : './public/app.js',
  entry : './app/app.jsx', // need babel-loader!
  output : {
    path : __dirname, // current directory (root)
    filename : './public/bundle.js'
  },
  resolve : {
    root : __dirname,
    alias : {
      Main : 'app/components/Main.jsx',
      Nav : 'app/components/Nav.jsx',
      Weather : 'app/components/Weather.jsx',
      WeatherForm : 'app/components/WeatherForm.jsx',
      WeatherMessage : 'app/components/WeatherMessage.jsx',
      About : 'app/components/About.jsx',
      Examples : 'app/components/Examples.jsx',
      openWeatherMap : 'app/api/openWeatherMap.jsx',
    },
    extensions : ['', '.js', '.jsx']
  },
  module : {
    loaders : [
      {
        loader : 'babel-loader',
        // run through react, then through es2015 ..
        query : {
          presets : ['react', 'es2015', 'stage-0']
        },
        test : /\.jsx?$/, // regex! ends in '.jsx'
        exclude : /(node_modules|bower_components)/
      }
    ]
  },
  devtool : 'cheap-module-eval-source-map'
};
