var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.join(__dirname, '/public');
var APP_DIR = path.join(__dirname, '/app');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    rules : [
      {
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        include: [
          path.resolve(__dirname, 'app')
        ],
        exclude: /node_modules/
      }, 
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader',
        include: /app/,
        exclude: /node_modules/,
        query: {
            presets: ["env", "react", "stage-0"],
        }
      },
      
    ]
}
};


module.exports = config;