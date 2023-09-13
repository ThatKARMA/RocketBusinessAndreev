const { src, dest } = require("gulp")
const htmlmin = require("gulp-htmlmin")
const sass = require("gulp-sass")(require("sass"))
const csso = require("gulp-csso");
const include = require("gulp-file-include")
const del = require("del")
const concat = require("gulp-concat")
const autoprefixer = require("gulp-autoprefixer");
const autoPrefixer = require("gulp-autoprefixer");
const sync = require("browser-sync").create()

function scss() {
    return src('src/scss/**.scss')
    .pipe(sass())
    .pipe(autoPrefixer({
        browsers: ['last 2 versions']
    }))
    .pipe(csso())
    .pipe(concat('style.css'))
    .pipe(dest('build'))
}

exports.scss = scss