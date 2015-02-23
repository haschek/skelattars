var gulp = require('./src/gulp')([
    'bower',
    'renderhtml',
    'tidyhtml'
//    'watch',
//    'minifycss',
//    'bootstrap',
//    'browserify',
//    'sass',
//    'vendor'
]);

gulp.task('init', ['bower']);//, 'vendor']);
// gulp.task('mockup', ['html', 'css', 'js',]);
gulp.task('html', ['renderhtml', 'tidyhtml']);
// gulp.task('css', ['sass']);
// gulp.task('minify', ['minifycss', 'browserify']);
// gulp.task('default', ['mockup', 'watch']);
