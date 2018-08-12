

"use strict";

/* параметры для gulp-autoprefixer */
var autoprefixerList = [
  'Chrome >= 45',
  'Firefox ESR',
  'Edge >= 12',
  'Explorer >= 10',
  'iOS >= 9',
  'Safari >= 9',
  'Android >= 4.4',
  'Opera >= 30'
];
/* пути к исходным файлам (src), к готовым файлам (build), а также к тем, за изменениями которых нужно наблюдать (watch) */
var path = {
  src: {
    html: 'assets/themekalisto-design/*.html',
    js: ['node_modules/jquery/dist/jquery.min.js',
        'node_modules/popper.js/dist/umd/popper.min.js',
        //'assets/themekalisto-design/libs/bootstrap/tooltip.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        //'assets/themekalisto-design/libs/jquery-migrate-1.4.1.min.js',
        'assets/themekalisto-design/libs/webslidemenu/webslidemenu.js',
        'assets/themekalisto-design/libs/magnific-popup/magnific-popup.min.js',
        'assets/themekalisto-design/libs/owl-carousel/owl.carousel.min.js',
         'assets/themekalisto-design/libs/jquery.carouFredSel-6.2.1-packed.js',
         'assets/themekalisto-design/libs/prettyPhoto/js/jquery.prettyPhoto.js',
         'assets/themekalisto-design/libs/jquery.touchwipe.min.js',
         //'assets/themekalisto-design/libs/jquery.easing.1.3.min.js',
         'assets/themekalisto-design/libs/waypoints/waypoints.min.js',
         //'assets/themekalisto-design/libs/animate/animate-css.js',
         'assets/themekalisto-design/libs/pgwslideshow/pgwslideshow.min.js',
         'assets/themekalisto-design/libs/animateNumber/jquery.animateNumber.min.js',
         'assets/themekalisto-design/libs/selectize/dist/js/standalone/selectize.min.js',
         'assets/themekalisto-design/libs/jquery.countdown.min.js',
         'assets/themekalisto-design/js/calculate.js',
         'assets/themekalisto-design/libs/wow.min.js',
         'assets/themekalisto-design/libs/modernizr/modernizr.js',
         'assets/themekalisto-design/js/common.js'
    ],
    css: 'assets/themekalisto-design/sass/main.sass',
    fonts: 'assets/themekalisto-design/fonts/**/*.*'
  },
  watch: {
    html: 'assets/themekalisto-design/**/*.html',
    js: ['assets/themekalisto-design/libs/**/*.js', 'assets/themekalisto-design/js/common.js'],
    css: 'assets/themekalisto-design/sass/**/*.*',
    fonts: 'assets/themekalisto-design/fonts/**/*.*'
  }
};

/* подключаем gulp и плагины */
var gulp          = require('gulp'), 
    gutil         = require('gulp-util' ),
    sass          = require('gulp-sass'),
    browsersync   = require('browser-sync'),
    concat        = require('gulp-concat'),
    uglify        = require('gulp-uglify'),
    cleancss      = require('gulp-clean-css'),
    rename        = require('gulp-rename'),
    autoprefixer  = require('gulp-autoprefixer'),
    notify        = require("gulp-notify");

/* задачи */

// запуск сервера
gulp.task('browser-sync', function () {
  browsersync({
    server: {
      baseDir: './assets/themekalisto-design'
    },
    notify: false
  });
});

// сбор стилей
gulp.task('sass', function () {
  gulp.src(path.src.css) // получим main.scss
    .pipe(sass({ outputStyle: 'expand' }).on("error", notify.onError()))
    .pipe(rename({ suffix: '.min', prefix : '' }))
    .pipe(autoprefixer(['last 15 versions']))
    .pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
    .pipe(gulp.dest('assets/themekalisto-design/css'))
    .pipe(browsersync.reload( {stream: true} )); // перезагрузим сервер
});

// сбор js
gulp.task('js', function () {
  gulp.src(path.src.js) // получим файл main.js
  .pipe(uglify())
  .pipe(concat('scripts.min.js'))
	.pipe(gulp.dest('assets/themekalisto-design/js'))
	.pipe(browsersync.reload({ stream: true })); // перезагрузим сервер
});

// запуск задач при изменении файлов
gulp.task('watch', ['sass', 'js', 'browser-sync'], function() {
  gulp.watch(path.watch.css, ['sass']);
  gulp.watch(path.watch.js, ['js']);
  gulp.watch('assets/themekalisto-design/*.html', browsersync.reload);
});

// задача по умолчанию
gulp.task('default', ['watch']);