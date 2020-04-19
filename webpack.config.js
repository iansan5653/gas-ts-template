module.exports = {
  mode: 'production',
  entry: './build',
  output: {
    path: __dirname,
    filename: 'Code.js',
    libraryTarget: "var"
  }
};
