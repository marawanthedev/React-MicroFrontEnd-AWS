const path = require("path");

module.exports = {
  resolve: {
    extensions: ["*", ".js", ".jsx", ".tsx", "ts"],
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.(tsx|jsx|ts|js)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
