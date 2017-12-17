//gulpfile.js

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');

gulp.task('js', function() {
    var src = [
      'src/lib/config.js'
      ,'src/js/util.js'
      ,'src/js/NoteData.js'
      ,'src/js/FileSaver.js'
      ,'src/js/NoteView.js'
      ,'src/js/tmpl.js'
      ,'src/app.js'];

    return gulp.src(src)
            .pipe(concat('all.js'))
            .pipe(uglify())
            .pipe(gulp.dest('dist'))
    //npx gulp js 실행하면 dist 폴더에 all.js파일 생김
});

gulp.task('css', function() {
    var src = ['src/css/app.css'];

    return gulp.src('src/css/app.css')
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(gulp.dest('dist'));
    //npx gulp css 실행하면 dist 폴더에 app.css 생김
});
