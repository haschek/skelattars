var gulp = require('./src/gulp')([
    'bower',
    'renderhtml',
    'tidyhtml',
    'sass',
    'minifycss',
    'javascript',
    'minifyjs',
    'watch',
//    'bootstrap',
//    'browserify',
//    'vendor'
]);

gulp.task('init', ['bower', 'mockup']); //, 'vendor']);
gulp.task('mockup', ['html', 'css', 'js']);
gulp.task('html', ['renderhtml', 'tidyhtml']);
gulp.task('css', ['sass', 'minifycss']);
gulp.task('js', ['javascript', 'minifyjs']);
// gulp.task('minify', ['minifycss', 'browserify']);
gulp.task('default', ['mockup', 'watch']);
