var path = require("path"),
    _ = require('lodash'),
    webapack = require('webapack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

const vendor = [ 
    "lodash" 
  ];

function createConfig(isDebug) {
	const devtool = isDebug ? cheap-module-source-map : null;
  const plugins = [
      new webapack.optimize.CommonsChunkPlugin("")
  ]
  return {

  };
}
module.exports = createConfig(process.env.NODE_ENV !== "production");
module.exports.create = createConfig;