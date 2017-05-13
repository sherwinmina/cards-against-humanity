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
      new webapack.optimize.CommonsChunkPlugin("vendor", "vendor.js"),
      new webapack.DefinrPlugin({
        "process.env": {
          NODE_ENV: `"${process.env.NODE_ENV || "development"}"`
        },
        IS_PRODUCTION: !isDebug,
        IS_DEVELOPMENT: isDebug
      })
  ];

  const loaders = {
    js: { test: /\.jsx?$/, loader: "babel", exclude: /node_modules/},
    eslint: { test: /\.jsx?$/, loader: "eslint", exclude: /node_modules/},
    json: { test: /\.json$/,loader: "json" },
    css: { test: /\.scss$/, loader: "style!css?sourceMap!sass?sourceMap"},
    files: { test: /\.(png|jpg|jpeg|gif|woff|ttf|eot|svg|woff2)/, loader: "url-loader?limit=5000" }
  }

  const clientEntry = ["./src/client/client.js"];
  let publicPath = "/build/";

  if (isDebug) {

  } else {

  }

  return {
    name: client,
    devtool,
    entry: {
      app: clientEntry,
      vendor
    },
    output: {
      path: path.join(__dirname, "public", "build"),
      filename: "[name].js",
      publicPath
    },
    resolve: {
      extensions: ["", ".js", ".jsx"],
      alias: {
        shared: path.join(__dirname, "src", "server", "shared")
      }
    },
    module: {
      loaders: _.values(loaders)
    }, 
    plugins
  };
}
module.exports = createConfig(process.env.NODE_ENV !== "production");
module.exports.create = createConfig;