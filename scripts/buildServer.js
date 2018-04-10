const webpack = require('webpack');
const serverConfig = require('./webpack.server.prod.config');

let compiler = webpack(serverConfig);
compiler.run((err, stats) => {
  if (err) {
    console.log("Error compiling server:", err);
  }
});