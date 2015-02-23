var gulp = require('gulp');
var htmltidy = require('gulp-htmltidy');

// init options
var options = {
        doctype: 'html5',
        indent: true,
        indentSpaces: 4,
        sortAttributes: true,
        hideComments: true,
        joinClasses: true,
        joinStyles: true,
        wrap: 0,
        wrapScriptLiterals: true,
        dropEmptyElements: false,
        mergeDivs: false,
        mergeSpans: false,
        mergeEmphasis: false,
        tidyMark: false,
};

module.exports = {
    deps: ['renderhtml'],
    work: function() {
      return gulp.src(
            './dist/*.html'
         )
         .pipe(
             htmltidy(
                 options
             )
         )
         .pipe(
             gulp.dest('./dist')
         );
    }
};
