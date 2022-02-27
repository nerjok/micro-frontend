const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    entry: './src/main',
    output: {
        path: path.resolve(__dirname, 'dist'),
        uniqueName: 'subproj', //expose  file names
        filename: '[name].js'
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 3002,
        hot: true
    },

    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".js"],
      plugins: [new TsconfigPathsPlugin({})]
    },
    module: {
      rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        { test: /\.tsx?$/, loader: "ts-loader" }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: "./src/index.html"
      }),
      new ModuleFederationPlugin({
        name: "subproj",
        library: { type: "var", name: "subproj" },
        filename: "remoteEntry.js",
        exposes: {
            "./component": "./src/main"
        },
        shared: {
            "rxjs": {},
        }
    }),
  ]
};
