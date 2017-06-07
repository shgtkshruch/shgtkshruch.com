const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require ('browser-sync');

const autoprefixer = require('autoprefixer');
const sorting = require('postcss-sorting');
const assets = require('postcss-assets');
const mqpacker = require('css-mqpacker');
const stylefmt = require('stylefmt');

const babel = require('rollup-plugin-babel');
const eslint = require('rollup-plugin-eslint');

const del = require('del');
const deleteEmpty = require('delete-empty');
const runSequence = require('run-sequence');
const wiredep = require('wiredep').stream;

const $ = gulpLoadPlugins();
const bs = browserSync.create();

gulp.task('browserSync', () => {
  bs.init({
    server: {
      baseDir: 'dist',
      routes: {
        '/bower_components': 'bower_components',
      },
    },
    notify: false,
    browser: 'Google Chrome Canary',
  });
});

gulp.task('wiredep', () => {
  return gulp.src('src/layout.pug')
    .pipe(wiredep())
    .pipe(gulp.dest('src'));
});

gulp.task('html', ['pug', 'sass', 'js'], () => {
  return gulp.src('dist/*.html')
    .pipe($.useref())
    .pipe($.if('*.html', $.htmlmin({ collapseWhitespace: true })))
    .pipe($.if('*.css', $.uncss({
      html: ['dist/*.html'],
      ignore: [/is-.*/],
    })))
    .pipe($.if('*.css', $.cleanCss()))
    .pipe($.if('*.js', $.uglify()))
    .pipe(gulp.dest('dist'));
});

gulp.task('pug', () => {
  return gulp.src('src/**/*.pug')
    .pipe($.plumber())
    .pipe($.changed('dist', {
      extension: '.html',
    }))
    .pipe($.pug({
      pretty: true,
    }))
    .pipe($.prettify({
      condense: true,
      padcomments: false,
      indent: 2,
      indent_char: ' ',
      indent_inner_html: 'false',
      brace_style: 'expand',
      wrap_line_length: 0,
      preserve_newlines: true,
    }))
    .pipe(gulp.dest('dist'))
    .pipe(bs.stream());
});

gulp.task('sass', () => {
  return gulp.src('src/styles/main.scss')
    .pipe($.sass().on('error', (err) => { console.log(err) }))
    .pipe($.postcss([
      autoprefixer({ browers: ['defaults'] }),
      assets({
        loadPaths: ['src/images/**/'],
        relative: true,
      }),
      sorting({ 'sort-order': 'yandex' }),
      mqpacker,
    ]))
    .pipe($.stylefmt())
    .pipe(gulp.dest('dist/styles'))
    .pipe(bs.stream());
});

gulp.task('stylelint', () => {
  return gulp.src('src/styles/**/*.scss')
    .pipe($.stylelint({
      reporters: [
        { formatter: 'string', console: true },
      ],
    }));
});

gulp.task('js', () => {
  return gulp.src('./src/scripts/app.js')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.rollup({
      allowRealFiles: true,
      entry: './src/scripts/app.js',
      format: 'iife',
      plugins: [
        eslint({
          useEslintrc: true,
        }),
        babel({
          exclude: 'node_modules/**/*',
        }),
      ],
    }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(bs.stream());
});

gulp.task('image', () => {
  return gulp.src('src/images/**/*')
    .pipe($.changed('dist/images'))
    .pipe($.imagemin({
      progressive: true,
      interlaced: true,
    }))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('clean:all', () => {
  return del('dist');
});

gulp.task('clean:build', () => {
  return del([
    'dist/layout.html',
    'dist/partials',
    'dist/{styles,scripts}/*',
    '!dist/{styles,scripts}/{app,main,vendor}.{css,js}',
  ]);
});

gulp.task('clean:empty', () => {
  deleteEmpty.sync('dist/');
});

gulp.task('ghpages', () => {
  return gulp.src('dist/**/*')
    .pipe(gulp.dest('docs'));
});

gulp.task('watch', () => {
  gulp.watch('src/**/*.pug', ['pug']);
  gulp.watch('src/styles/**/*.scss', ['stylelint', 'sass']);
  gulp.watch('src/scripts/**/*.js', ['js']);
  gulp.watch('src/images/**/*', ['image']);
});

gulp.task('default', (cb) => {
  runSequence(['pug', 'sass', 'js', 'image'], 'browserSync', 'watch', cb);
});

gulp.task('build', (cb) => {
  runSequence('clean:all', ['html', 'image'], ['clean:build', 'clean:empty'], cb);
});

gulp.task('publish', (cb) => {
  runSequence('build', 'ghpages', cb);
});

