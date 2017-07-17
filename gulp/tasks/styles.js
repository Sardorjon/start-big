var gulp =require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
css_import = require('postcss-import'),
mixins = require('postcss-mixins');

gulp.task('styles', function(){
return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([css_import, mixins, nested, cssvars, autoprefixer]))
  .on('error', function(xatolar){
    console.log(xatolar.toString());
    this.emit('end');
  })
  .pipe(gulp.dest('./app/temp/styles'));
});
