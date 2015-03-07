var gulp = require('gulp');
var rename = require('gulp-rename');
var minifyJS = require('gulp-uglify');
var config = require('../config');

module.exports = {
    deps: ['javascript'],
    work: function() {
        return gulp.src([
                './dist/js/**/!(*'+config.minsuffix+'.*).js' // @see https://github.com/isaacs/node-glob#glob-primer
            ])
            .pipe(
                minifyJS(
                    config.minifyjs
                )
            )
            .pipe(
                rename({
                    // @see https://github.com/hparra/gulp-rename#usage
                    suffix: config.minsuffix
                })
            )
            .pipe(
                gulp.dest('./dist/js')
            );
    }
};
