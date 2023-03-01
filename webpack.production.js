'use strict';
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CspHtmlWebpackPlugin = require("csp-html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { merge } = require("webpack-merge");
const base = require("./webpack.config");
const path = require("path");
const nonce = require("./create-nonce")();
// const { setNonce, getNonce } = require("./create-nonce.ts");

module.exports = merge(base, {
  mode: "production",
  devtool: false,
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "app/src/index.ejs"),
      filename: "index.html",
      base: "app://rse",
      // nonce: nonce
    }),
    // You can paste your CSP in this website https://csp-evaluator.withgoogle.com/
    // for it to give you suggestions on how strong your CSP is
    // new CspHtmlWebpackPlugin(
    //   {
    //     "base-uri": ["'self'"],
    //     "object-src": ["'none'"],
    //     "script-src": ["'self'", `'nonce-${nonce}'`],
    //     "style-src": ["'self'", `'nonce-${nonce}'`],
    //     "frame-src": ["'none'"],
    //     "worker-src": ["'none'"]
    //   },
    //   {
    //     hashEnabled: {
    //       "style-src": false
    //     }
    //   }
    // )
  ],
  optimization: {
    minimize: true,
    minimizer: [
      "...", // This adds default minimizers to webpack. For JS, Terser is used. // https://webpack.js.org/configuration/optimization/#optimizationminimizer
      new CssMinimizerPlugin()
    ]
  }
});
