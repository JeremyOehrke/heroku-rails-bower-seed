# A Heroku Seed Project for Rails using Bower

## Overview
This project was born out of the desire to let Bower handle front end dependancies while still allowing the Rails asset pipline to pull together only the necessary JS and CSS files from the imported Bower projects and get the whole system to work with Heroku's deployment process.

Using this build method allows for the use of Bower to pull in front end assets that have their own static content that must be relative to the referencing package while preventing Rake's asset precompile from breaking paths due to moving javascript and css around inside the project during production deployments.

## The Deploy Process
### Phase 1 - NodeJS BuildPack
Even though this is not a NodeJS project, we still need Heroku's NodeJS buildpack to bring in Bower and Gulp, and run their tasks.  First, Bower runs it's install, then after we tell Gulp to copy all of the static files (fonts and images) to their proper relative directory from Rail's soon-to-exist compiled application.js file.

This step is outlined in the package.json file:
```
"scripts": {
    "postinstall": "node node_modules/bower/bin/bower install && gulp copystatic"
  }
```

The copystatic gulp function is defined in the gulp.js file as:
```
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
```


### Phase 2 - Rails BuildPack
At this point, all of the static assets are housed relative to the /public/assets directory where the Rake command will end up dropping the compiled application.js and application.css files.  From here it's a standard Rails deployment.
