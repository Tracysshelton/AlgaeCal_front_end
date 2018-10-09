// requiring packages
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass');

// Styles Task
gulp.task('styles', function(){
    gulp.src('scss/**/*.scss')
    .pipe(sass({
        style: 'normal'
    }))
    .pipe(gulp.dest('css/'));
});

// Watch task
// Watches CSS
gulp.task('watch', function(){
    gulp.watch('scss/**/*.scss', ['styles']);
});


// Run task on change
gulp.task('default', ['styles', 'watch']);