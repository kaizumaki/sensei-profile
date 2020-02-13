const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');

gulp.task('css', function () {
  return gulp.src('./src/scss/styles.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(postcss())
    .pipe(gulp.dest('./public'));
});
