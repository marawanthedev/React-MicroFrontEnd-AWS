const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const webpack = require("webpack");
const packageJson = require("../package.json");
const { merge } = require("webpack-merge");

const devConfig = {
  mode: "development",
  devServer: {
    port: 3000,
    historyApiFallback: {
      index: "index.html",
    },
    hot: true,
  },
  plugins: [
   
    new webpack.HotModuleReplacementPlugin(),
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        marketing: "marketing@http://localhost:8081/remoteEntry.js",
      },
      // sharing dependecies that are listed in package .json
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
