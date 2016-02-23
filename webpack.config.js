var webpack           = require("webpack");
var path              = require("path");
var HTMLWebpackPlugin = require("html-webpack-plugin");

var config = {
  devtool: "inline-source-map",

  entry: [
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server",
    path.resolve("src/index.js"),
  ],

  output: {
    path: path.resolve("build"),
    filename: "app.js",
    publicPath: "http://localhost:8080/"
  },

  resolve: {
    extensions: ["", ".js", ".jsx"],
    alias: {
      "app": path.resolve("src"),
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve("src/index.html"),
      minify: { collapseWhitespace: true },
    }),
  ],

  module: {
    preLoaders: [
      {test: /\.js$/, loader: "eslint", exclude: /node_modules/}
    ],
    loaders: [
      { test: /\.css$/, loader: "style!css?sourceMap" },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "react-hot" },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel", query: {
        presets: ["react", "es2015", "stage-0"],
      } },
    ],
  }
};

module.exports = config;
