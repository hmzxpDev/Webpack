const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass'); // 1

function build() { // 2
    return src('src/main.scss') // 3
        .pipe(sass()) // 4
        .pipe(dest('output'));
}

exports.build = build; // 5


exports["build:watch"] = function () { // 2
    return watch('src/*.scss', build);
} // 3