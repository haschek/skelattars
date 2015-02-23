var gulp = require('gulp');

// dummy task until real template rendering is used

module.exports = function(){
    return gulp.src([
            './src/html/*.html',
        ])
        .pipe(
            gulp.dest('./dist')
        );
};
