import path from 'path';
import { fileURLToPath } from 'url';
import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import changeFileContent from 'gulp-change-file-content';
import concat from 'gulp-concat';

const sass = gulpSass(dartSass);

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export const buildStyles = () => gulp
  .src('./src/scss/**/*.scss')
  .pipe(changeFileContent((content) => `@import 'globals.scss';\n${content}`))
  .pipe(sass.sync({
    includePaths: ['./src', './node_modules'],
  }).on('error', sass.logError))
  .pipe(concat('style.css'))
  .pipe(gulp.dest('./dist'));

export default () => gulp.watch('./src/**/*.scss', buildStyles);
