const path = require('path');

const nodeExternals = require('webpack-node-externals');
const baseConfig = require('react-scripts/config/webpack.config.prod');

const serverConfig = Object.assign({}, baseConfig, {
	target: 'node',
  entry: {'server.js': path.join(process.cwd(), 'src', 'server.js')},
  output: {
    path: path.resolve(process.cwd(), 'lib'),
    filename: '[name]',
  },
  externals: [nodeExternals({})],
//  plugins: []
});

module.exports = serverConfig;