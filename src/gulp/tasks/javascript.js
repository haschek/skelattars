var gulp = require('gulp');
var jshint = require('gulp-jshint');
var config = require('../config.js');

module.exports = function(){
    return gulp.src([
            './src/js/**/*.js',
        ])
        // TODO: add requirejs, apm, ...
        .pipe(
            jshint(
                config.jslint.configfile
            )
        )
        .pipe(
            jshint.reporter(
                config.jslint.reporter
            )
        )
        .pipe(gulp.dest('./dist/js'));
};
