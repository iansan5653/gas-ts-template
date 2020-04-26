/* eslint-disable no-undef, @typescript-eslint/no-var-requires */
const GasPlugin = require("gas-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./build",
  output: {
    path: __dirname,
    filename: "Code.js",
    libraryTarget: "var",
  },
  plugins: [new GasPlugin()],
  devtool: false,
};
