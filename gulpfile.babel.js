// General stuff
import gulp       from 'gulp';
import babel      from 'gulp-babel';
import run        from 'run-sequence';
import gutil      from 'gulp-util';
import nodemon    from 'gulp-nodemon';
import { exec }   from 'child_process';

// Webpack stuff
import WebpackDevServer from "webpack-dev-server";
import webpack from "webpack";
import webpackConfig from "./webpack.config.dev";

gulp.task('start:dev', ['server']);

gulp.task('transpile', () => {
  return gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/build'));
});

gulp.task('webpack:server', () => {
  var server = new WebpackDevServer(webpack(webpackConfig), {
    // webpack-dev-server options
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    stats: { colors: true },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  });

  server.listen(3001, "0.0.0.0", function() {});
});

gulp.task('webpack:compile', cb => {
  webpack(webpackConfig, (err, stats) => {
    if(err) throw new gutil.PluginError("webpack", err);
      gutil.log("[webpack]", stats.toString({
          // output options
      }));
      cb();
  });
});

gulp.task('server', ['transpile', 'webpack:server'], () => {
  nodemon({
    script: 'dist/build/server/server.js'
  });
});