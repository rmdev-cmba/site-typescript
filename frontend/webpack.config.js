const path = require('path')

module.exports = {
  // node: process.env.NODE_ENV,
  entry: {
    index: ['./src/index.ts']
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public', 'dist')
  }
}

//https://youtu.be/JA2Gx-7Fy7g?list=PLyugqHiq-SKfPI4of2RbSdtzBfmwioERL
