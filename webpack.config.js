const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const dotenv = require("dotenv");

module.exports = (env) => {
  const _dotenv = dotenv.config().parsed;

  const envKeys = Object.keys(_dotenv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    mode: env.production ? "production" : "development",
    entry: path.join(__dirname, "src", "index.js"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].[contenthash].js",
    },
    devtool: "inline-source-map",
    cache: false,
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
      modules: ["node_modules"],
      alias: {
        react: path.resolve("./node_modules/react"),
        "react-dom": path.resolve("./node_modules/react-dom"),
        "styled-components": path.resolve("./node_modules/styled-components"),
      },
    },
    module: {
      rules: [
        {
          test: /\.?(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              cacheCompression: false,
              cacheDirectory: true,
              plugins: [
                !env.production && require.resolve("react-refresh/babel"),
              ].filter(Boolean),
            },
          },
        },

        {
          test: /\.(png|jpg|jpeg)$/i,
          type: "asset/resource",
        },
        {
          test: /\.svg$/i,
          type: "asset/inline",
        },
      ],
    },

    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
      }),
      !env.production && new ReactRefreshWebpackPlugin(),
      new webpack.DefinePlugin(envKeys),
    ].filter(Boolean),
    devServer: {
      open: true,
      port: 3000,
      compress: true,
      hot: true,
      headers: {
        "Cache-Control": "no-store",
      },
    },
  };
};
