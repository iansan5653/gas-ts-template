const path = require("path");
const GasPlugin = require("gas-webpack-plugin");

const entry = "./build/index.js";

module.exports = {
  mode: "development",
  context: __dirname,
  entry,
  output: {
    path: path.resolve(__dirname, "build"), // ✅ Save to build/
    filename: "Code.js",                     // ✅ Required file name
    libraryTarget: "this",                   // ✅ Ensures global scope for doGet, etc.
  },
  plugins: [
    new GasPlugin({
      autoGlobalExportsFiles: [entry],
    }),
  ],
  devtool: false,
};

