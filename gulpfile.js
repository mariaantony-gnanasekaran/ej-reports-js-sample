const gulp = require("gulp");
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');
const open = require('open');
const port = 9000;
const { rm, mkdir, cp } = require('shelljs');

gulp.task('serve', () => {
  const server = new WebpackDevServer(webpack(config));
  server.listen(port, 'localhost', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Reports JS samples is listening on localhost:', port);
    open('http://localhost:' + port + '/');
  });

});


gulp.task('build', () => {
  rm('-rf', 'dist');
  mkdir('-p', 'dist');
  cp('-r', ['index.html', 'favicon.ico', 'assets', 'src'], 'dist');
  return gulp.src('.')
    .pipe(webpackStream(require('./webpack.config.js'), webpack))
    .pipe(gulp.dest('dist'));
});
