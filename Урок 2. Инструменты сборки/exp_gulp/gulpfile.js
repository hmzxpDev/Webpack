const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');

exports.default = async function () {
    console.log("Hello from my first task");
}

exports.copy = function () {   
    return src('src/*.scss')   
        .pipe(dest('output')); 
}

function build() { 
    return src('src/main.scss') 
        .pipe(sass()) 
        .pipe(dest('output'));
}

exports.build = build; 


exports["build:watch"] = function () { 
    return watch('src/*.scss', build);
} 