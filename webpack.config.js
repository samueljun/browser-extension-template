const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const { version } = require("./package.json");

module.exports = {
  mode: "development",
  entry: {
    background: "./src/background/background.js",
    panel: "./src/panel/panel.js",
    options: "./src/options/options.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]/[name].js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  corejs: 3,
                },
              ],
              "@babel/preset-react",
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      title: "Extension Panel",
      template: "src/panel/panel.html",
      filename: "panel/panel.html",
      chunks: ["panel"],
    }),
    new HtmlWebpackPlugin({
      title: "Extension Options",
      template: "src/options/options.html",
      filename: "options/options.html",
      chunks: ["options"],
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: "./src/assets", to: "./assets" },
        {
          from: "./src/manifest.json",
          to: "./manifest.json",
          transform: (content) => {
            const jsonContent = JSON.parse(content);
            jsonContent.version = version;
            return JSON.stringify(jsonContent, null, 2);
          },
        },
      ],
    }),
  ],
};
