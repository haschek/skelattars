var gulp = require('gulp');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var config = require('../config');

module.exports = {
    deps: ['sass'],
    work: function() {
        return gulp.src([
                './dist/css/**/!(*.min.*).css' // @see https://github.com/isaacs/node-glob#glob-primer
            ])
            .pipe(
                minifyCSS({
                    debug: config.debug,
                    keepBreaks: true,
                    processImport: false,
                    roundingPrecision: -1,
                    keepSpecialComments: 1
                })
            )
            .pipe(
                rename({
                    // @see https://github.com/hparra/gulp-rename#usage
                    suffix: ".min"
                })
            )
            .pipe(
                gulp.dest('./dist/css')
            );
    }
};
