var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var config = require('../config.js');

module.exports = function(){
    return gulp.src([
            './src/scss/**/*.scss',
        ])
        .pipe(sass(config.scss))
        // TODO: add autoprefixer
        .pipe(autoprefixer(config.autoprefixer))
        .pipe(gulp.dest('./dist/css'));
};
