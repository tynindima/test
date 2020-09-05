const gulp = require('gulp')
const plumber = require('gulp-plumber')
const htmlValidator = require('gulp-w3c-html-validator')
const bemValidator = require('gulp-html-bem-validator')

module.exports = function copyHtml() {
  return gulp.src('src/*.html')
    .pipe(plumber())
    .pipe(htmlValidator())
    .pipe(bemValidator())
    .pipe(gulp.dest('build'));
}
