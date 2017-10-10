const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ENV = process.env.NODE_ENV || 'dev';
const BUILD = ENV === 'build';

const BASE_URL = process.env.BASE_URL || '/';

const config = {
  entry: {
    app: './src/app/app.js'
  },
  output: {
    path: __dirname + '/dist',
    publicPath: BUILD ? '' : 'http://localhost:8800/',
    filename: BUILD ? '[name].[hash].js' : '[name].bundle.js',
    chunkFilename: BUILD ? '[name].[hash].js' : '[name].bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['ng-annotate', 'babel'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file',
      },
      {
        test: require.resolve('snapsvg'),
        loader: 'imports-loader?this=>window,fix=>module.exports=0'
      },
      {
        test: /\.html$/,
        exclude: /index\.html/,
        loader: 'html',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss'),
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].[hash].css', {
      disable: !BUILD,
    }),
    new HtmlWebpackPlugin({
      baseUrl: BASE_URL,
      template: './src/index.html',
      inject: 'body',
    }),
    new webpack.ProvidePlugin({
         $: "jquery",
         jQuery: "jquery"
     }),
  ],
  devtool: BUILD ? 'source-map' : 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    stats: {
      modules: false,
      cached: false,
      colors: true,
      chunk: false,
    },
    historyApiFallback: true,
    proxy: {
      '/api/*': {
        target: 'http://localhost:3000/',
        secure: false,
      }
    }
  },

  postcss: [
    autoprefixer({
      browsers: ['last 2 version'],
    }),
  ],
};

if (BUILD) {
  config.plugins.push(
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  );
}

module.exports = config;
