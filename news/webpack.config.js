const HtmlWebPackPlugin = require("html-webpack-plugin"),
path = require("path");

module.exports = {
  entry: ["./src/js/index.js"],
  output: {
    filename: "js/index.js",
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
    })
  ]
};
