const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { merge } = require("webpack-merge");
const base = require("./webpack.config");
const path = require("path");

module.exports = merge(base, {
  mode: "production",
  devtool: false,
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "app/src/index.ejs"),
      filename: "index.html",
      base: "app://rse",
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      "...", // This adds default minimizers to webpack. For JS, Terser is used. // https://webpack.js.org/configuration/optimization/#optimizationminimizer
      new CssMinimizerPlugin()
    ]
  }
});
