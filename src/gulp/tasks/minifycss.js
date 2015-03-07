var gulp = require('gulp');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var config = require('../config');

module.exports = {
    deps: ['sass'],
    work: function() {
        return gulp.src([
                './dist/css/**/!(*'+config.minsuffix+'.*).css' // @see https://github.com/isaacs/node-glob#glob-primer
            ])
            .pipe(
                minifyCSS(
                    config.minifycss
                )
            )
            .pipe(
                rename({
                    // @see https://github.com/hparra/gulp-rename#usage
                    suffix: config.minsuffix
                })
            )
            .pipe(
                gulp.dest('./dist/css')
            );
    }
};
