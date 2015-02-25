var gulp = require('gulp');

module.exports = function(){
    gulp.watch('./src/html/**/*', ['html']);
    gulp.watch('./src/scss/**/*', ['css']);
    gulp.watch('./src/js/**/*', ['js']);
};
