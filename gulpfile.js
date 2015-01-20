// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass');
 
var env = process.env.NODE_ENV || 'development';

// SASS
gulp.task('sass', function() {
    var config = {};

    if(env === 'development') {
        config.style = 'expanded';
    }

    if(env === 'production') {
        config.style = 'compressed';
    }

    return gulp.src('./sass/*.scss')
    .pipe(sass(config)) 
    .pipe(gulp.dest('./app/public/css'));
});
 
// Watch
gulp.task('watch', function() {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

// Default
gulp.task('default', ['sass', 'watch']);
