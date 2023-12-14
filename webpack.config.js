/* eslint-disable no-undef, @typescript-eslint/no-var-requires */
const GasPlugin = require("gas-webpack-plugin");

module.exports = {
  mode: "production",
  context: __dirname,
  entry: "./build/index.js",
  output: {
    path: __dirname,
    filename: "Code.js",
  },
  plugins: [new GasPlugin()],
  devtool: false,
};
