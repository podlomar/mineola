import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

const sass = gulpSass(dartSass);

export const buildStyles = () => gulp
  .src('./src/index.scss')
  .pipe(sass.sync({
    includePaths: ['./src', './node_modules'],
  }).on('error', sass.logError))
  .pipe(rename('style.css'))
  .pipe(gulp.dest('./dist'));

export default () => gulp.watch(
  './src/**/*.scss', { ignoreInitial: false }, buildStyles
);
