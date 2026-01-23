const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "./app.js",
  },
  devServer: {
    port: 8080,
    static: {
      directory: path.join(__dirname, "public"),
    },
    hot: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      modules: path.resolve(__dirname, "node_modules"),
      jquery: path.resolve(
        __dirname,
        "node_modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js"
      ),
      bootstrap: path.resolve(
        __dirname,
        "node_modules/admin-lte/bootstrap/js/bootstrap.js"
      ),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
    new MiniCssExtractPlugin({
      filename: "app.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-transform-object-rest-spread"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg|png|jpg)$/,
        type: "asset/resource",
      },
    ],
  },
};
