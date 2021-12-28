const path = require("path");
module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve("./bin"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", "..."],
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" },
    ],
  },
};
