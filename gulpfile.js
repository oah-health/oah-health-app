var gulp = require('gulp')
, concat = require('gulp-concat')
, del = require('del');

var browserSync = require('browser-sync')
, jsonServer = require('json-server');

var server = jsonServer.create()
var router = jsonServer.router('data.json')
var middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

var prefix = 'node_modules'
gulp.task('vendor', function() {
  gulp.src([
    prefix + '/jquery/dist/jquery.js'
    , prefix + '/bootstrap/dist/js/bootstrap.js'
    , prefix + '/angular/angular.js'
    , prefix + '/angular-route/angular-route.js'
  ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('public/js'))
});

gulp.task('style', function() {
  gulp.src([
    prefix + '/bootstrap/dist/css/bootstrap.css'
    , prefix + '/bootstrap/dist/css/bootstrap-theme.css'
  ])
    .pipe(concat('style.css'))
    .pipe(gulp.dest('public/style/css'))
});
gulp.task('fonts', function() {
  gulp.src([
    prefix + '/bootstrap/dist/fonts/*'
  ])
    .pipe(gulp.dest('public/style/fonts'))
});

gulp.task('app', function() {
  gulp.src('src/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/js'));
})

gulp.task('clean', function() {
  return del([
    'public/js'
    , 'public/style'
  ])
})

gulp.task('reload', browserSync.reload);

gulp.task('default', ['vendor', 'fonts', 'style', 'app']);

gulp.task('watch', [ 'default' ], function() {
  browserSync({
    server: {
      baseDir: 'public'
    }
    , middleware: [
      {
        route: "/api"
        , handle: server
      }
    ]
    , open: false
  });
  var watcher = gulp.watch(['src/**/*.js', 'public/**/*.html'], ['default', 'reload']);
  /*
  watcher.on('change', function(event) {
    console.log(event);
  })
  */
})
