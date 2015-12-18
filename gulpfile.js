var gulp = require('gulp');

gulp.task('copystatic', function() {
    //copy font awesome fonts
    gulp.src('./vendor/assets/bower_components/font-awesome/fonts/**/*.*')
        .pipe(gulp.dest('./public/fonts'));
    //copy bootstrap fonts
    gulp.src('./vendor/assets/bower_components/bootstrap/fonts/**/*.*')
        .pipe(gulp.dest('./public/fonts'));
    //copy bxslider images
    gulp.src('./vendor/assets/bower_components/fafnur-bxslider/dist/images/**/*.*')
        .pipe(gulp.dest('./public/assets/images'));
});