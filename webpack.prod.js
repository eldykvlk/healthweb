const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  // Additional setup for serving JSON file in production
  plugins: [
    {
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
          const sourcePath = path.join(__dirname, 'src/public/data/quis.json');
          const destPath = path.join(__dirname, 'dist/public/data/quis.json');

          // Copy the JSON file to the output directory
          require('fs').copyFileSync(sourcePath, destPath);
        });
      },
    },
  ],
});
