var gulp = require('gulp');
var htmltidy = require('gulp-htmltidy');
var config = require('../config.js');

module.exports = {
    deps: ['renderhtml'],
    work: function() {
      return gulp.src(
            './dist/*.html'
         )
         .pipe(
             htmltidy(
                 config.htmltidy
             )
         )
         .pipe(
             gulp.dest('./dist')
         );
    }
};
