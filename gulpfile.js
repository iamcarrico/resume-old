'use strict';

var gulp = require('gulp');
require('gulp-poole')(gulp);

// Now we add in some custom tasks.
require('gulp-grunt')(gulp);

// run them like any other task
gulp.task('icons', function() {
  gulp.run('grunt-icons');
});
