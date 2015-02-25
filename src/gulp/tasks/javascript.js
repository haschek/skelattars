var gulp = require('gulp');
var jshint = require('gulp-jshint');
var config = require('../config.js');

// init options
var options = {
    outputStyle: 'nested',
    errLogToConsole: true
};
// enable source maps if debug is enabled
if(config.debug) {
    //options.sourceMap = 'sass';
    //options.sourceComments = 'map';
}

module.exports = function(){
    return gulp.src([
            './src/js/**/*.js',
        ])
        // TODO: add requirejs, apm, ...
        .pipe(
            jshint('.jshintrc')
        )
        .pipe(
            jshint.reporter('default')
        )
        .pipe(gulp.dest('./dist/js'));
};
