const HtmlWebPackPlugin = require("html-webpack-plugin"),
ExtractTextPlugin = require("extract-text-webpack-plugin"),
UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
BabelWebpackPlugin = require('babel-minify-webpack-plugin'),
OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
cssnano = require('cssnano'),
path = require("path"),
webpack = require('webpack');

module.exports = {
  entry: ["./js/news.js", "./css/style.css","./css/style.boxes", "./css/cards.css"],
  // ["./src/js/index.js", "./src/_scss/main.scss"],
  output: {
    filename: "js/news.min.js",
    path: path.join(__dirname, "./build/")
  },
  // output: {
  //       filename: '[name].[chunkhash].js',
  //       ...
  // },
  module: {
    loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
        ],
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
      // {
      //   test: /\.css$/,
      //   use: ExtractTextPlugin.extract({
      //     use: [
      //       {
      //         loader: "css-loader",
      //         options: { minimize: true }
      //       }
      //       // { loader: "postcss-loader" },
      //       // { loader: "sass-loader" }
      //     ]
      //   })
      // },
  //   {
  //    test: /\.js$/,
  //    use: {
  //      loader: "babel-loader",
  //      options: {
  //        presets: ["env"]
  //      }
  //    }
  //  }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.min.html"
    }),
    // new ExtractTextPlugin('[name].[chunkhash].css'),
    new webpack.optimize.UglifyJsPlugin({
    compress: {
        compress: true,
        warnings: false
    }
  }),
  // new ExtractTextPlugin("styles.css"),
    // new OptimizeCssAssetsPlugin({
    //   assetNameRegExp: /\.optimize\.css$/g,
    //   cssProcessor: require('cssnano'),
    //   cssProcessorOptions: { discardComments: {removeAll: true } },
    //   canPrint: true
    // })
]
};

// https://www.valentinog.com/blog/from-gulp-to-webpack-quickstart/ -- webpack
