const HtmlWebPackPlugin = require("html-webpack-plugin"),
ExtractTextPlugin = require("extract-text-webpack-plugin"),
path = require("path");

module.exports = {
  entry: ["./js/news.js"],
  output: {
    filename: "js/news.js",
    path: path.join(__dirname, "./build/")
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{ loader: "html-loader", options: { minimize: true } }]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new ExtractTextPlugin({
      filename: "css/style.css"
    })
  ]
};

// https://www.valentinog.com/blog/from-gulp-to-webpack-quickstart/ -- webpack
// https://medium.com/@kimberleycook/intro-to-webpack-1d035a47028d -- intro to webpack
// https://zellwk.com/blog/bower/ -- bower
