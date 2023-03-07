let gulp = require('gulp')
let ts = require('gulp-typescript')
let uglify = require('gulp-uglify')
let chmod = require('gulp-chmod')
let insert = require('gulp-insert')
let tsProject = ts.createProject('tsconfig.json')
let concat = require('gulp-concat')

function build() {
    return gulp.src('src/**/*.ts')
        .pipe(tsProject())
        //.pipe(uglify())
        .pipe(concat('phil.js'))
        .pipe(gulp.dest('dist'))
}

function release() {
    return gulp.src('dist/phil.js')
        .pipe(insert.prepend(`#!/usr/bin/env node`))
        .pipe(chmod(0o755))
        .pipe(gulp.dest('dist'))
}

exports.default = gulp.series(build, release)