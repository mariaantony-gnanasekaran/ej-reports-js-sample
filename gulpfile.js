const gulp = require("gulp");
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');
const open = require('open');
const port = 9000;

gulp.task('serve', function () {
  const server = new WebpackDevServer(webpack(config));
  server.listen(port, 'localhost', function (err) {
    if (err) {
      console.log(err);
    }
    console.log('Reports JS samples is listening on localhost:', port);
    open('http://localhost:' + port + '/');
  });

});