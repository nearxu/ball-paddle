const path = require("path");
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["env"]
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",

            options: {
              sourceMap: true
            }
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{ loader: "url-loader" }]
      }
    ]
  },
  entry: "./src/index.js",

  output: {
    filename: "[name].js",
    chunkFilename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },

  mode: "development"
};
