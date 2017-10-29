const HtmlWebPackPlugin = require("html-webpack-plugin"),
ExtractTextPlugin = require("extract-text-webpack-plugin"),
UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
BabelWebpackPlugin = require('babel-minify-webpack-plugin'),
OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
cssnano = require('cssnano'),
path = require("path"),
webpack = require('webpack');

module.exports = {
  entry: ["./js/news.js"],
  output: {
    filename: "js/news.min.js",
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
      },
    {
     test: /\.js$/,
     use: {
       loader: "babel-loader",
       options: {
         presets: ["env"]
       }
     }
   }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.min.html"
    }),
    new ExtractTextPlugin({
      filename: "css/style.css"
    }),
    new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
  })
]
};

// https://www.valentinog.com/blog/from-gulp-to-webpack-quickstart/ -- webpack
