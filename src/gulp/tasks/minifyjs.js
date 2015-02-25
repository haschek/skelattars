var gulp = require('gulp');
var rename = require('gulp-rename');
var minifyJS = require('gulp-uglify');
var config = require('../config');

module.exports = {
    deps: ['sass'],
    work: function() {
        return gulp.src([
                './dist/js/**/!(*.min.*).js' // @see https://github.com/isaacs/node-glob#glob-primer
            ])
            .pipe(
                minifyJS()
            )
            .pipe(
                rename({
                    // @see https://github.com/hparra/gulp-rename#usage
                    suffix: ".min"
                })
            )
            .pipe(
                gulp.dest('./dist/js')
            );
    }
};
