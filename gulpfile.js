const gulp = require('gulp');
const gtag = require('gulp-gtag');
const sitemap = require('gulp-sitemap'); 
const useref = require('gulp-useref');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');  
const htmlmin = require('gulp-htmlmin');
const uglifyes = require('gulp-uglify-es').default;
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');

function googlesitemap() {
    return gulp.src('./*.html', {
        read: false
    })
        .pipe(sitemap({
            siteUrl: 'https://www.virtech-ksa.com/'
        }))
        .pipe(gulp.dest('./dist'));
}

function googleAnalytics() {
    return gulp.src('./*.html')
        .pipe(gtag({ uid: 'UA-154979814-2', tag: 'head' }))
        .pipe(gulp.dest('./'));
}

function fileConcat(){
    return gulp.src('./*.html')
    .pipe(useref())
    .pipe(gulp.dest('dist/'))
}

function minifyHTML() {
    return gulp.src('./dist/*.html')             
        .pipe(htmlmin({ removeComments: true, collapseWhitespace: true, minifyCSS: true, minifyJS: true }))
        .pipe(gulp.dest('dist/'));
}
 
function cleancss(){
    return gulp.src('dist/css/*.css')
    .pipe(autoprefixer({cascade:false}))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
}
 
function minifyJS() {
    return gulp.src('./dist/js/**/*.js')
        .pipe(uglifyes())
        .pipe(gulp.dest('dist/js'))
}

function optimizeImages() {
    return gulp
        .src("./images/**/*")
        .pipe(newer("./dist/images/"))
        .pipe(
            imagemin()
        )
        .pipe(gulp.dest("./dist/images/"));
}

function copyFonts(){
    return gulp.src("./fonts/*")
    .pipe(gulp.dest("dist/fonts/"))
}

function copyFavicon(){
    return gulp.src("./favicon.png")
        .pipe(gulp.dest("dist/"))
}

function copyHtaccess(){
    return gulp.src("./.htaccess")
        .pipe(gulp.dest("dist/"))
}

function copyrobotstxt(){
    return gulp.src("./robots.txt")
        .pipe(gulp.dest("dist/"))
}

const build = gulp.series(fileConcat,minifyHTML,cleancss,minifyJS,copyFonts,optimizeImages,copyFavicon,copyrobotstxt,copyHtaccess);

exports.googlesitemap = googlesitemap;
exports.googleAnalytics = googleAnalytics;
exports.fileConcat = fileConcat;
exports.minifyHTML = minifyHTML; 
exports.minifyJS = minifyJS;
exports.optimizeImages = optimizeImages;
exports.cleancss = cleancss;
exports.copyFonts = copyFonts;
exports.copyFavicon = copyFavicon;
exports.copyHtaccess = copyHtaccess;
exports.copyrobotstxt = copyrobotstxt;
exports.build = build;