// if debug is enabled

exports.debug = true;

// minified suffix (.ext for example.ext.css|js)

exports.minsuffix = '.min';

// SCSS
exports.scss = {
    outputStyle: 'nested',
    errLogToConsole: true
};

// CSS Minifier (clean-css)

exports.minifycss = {
    debug: exports.debug,
    keepBreaks: true,
    processImport: false,
    roundingPrecision: -1,
    keepSpecialComments: 1,
    shorthandCompacting: false
};

// JS Minifier (UglifyJS2)

exports.minifyjs = {
    preserveComments: 'some'
};

// JSLint

exports.jslint = {
    configfile: '.jshintrc',
    reporter: 'default'
}

// HTML Tidy

exports.htmltidy = {
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
    tidyMark: false
};

// site url for testing
// exports.siteBase = 'http://localhost';
// exports.serverPort = 8080;
