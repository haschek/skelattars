var gulp = require('gulp');
var sass = require('gulp-sass');
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
            './src/scss/**/*.scss',
        ])
        .pipe(sass(options))
        .pipe(gulp.dest('./dist/css'));
};
