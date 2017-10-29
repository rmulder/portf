const HtmlWebPackPlugin = require("html-webpack-plugin"),
ExtractTextPlugin = require("extract-text-webpack-plugin"),
UglifyJSPlugin = require('uglifyjs-webpack-plugin')
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
      },
      {
        test: /\.(png|jpe?g)/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "./img/[name].[ext]",
              limit: 10000
            }
          },
          {
            loader: "img-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: { minimize: true }
            },
            { loader: "postcss-loader" },
            { loader: "sass-loader" }
          ]
        })
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
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
