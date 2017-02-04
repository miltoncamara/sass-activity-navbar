var gulp = require("gulp");
var sass = require("gulp-sass");
var notify = require("gulp-notify");

gulp.task("sass", function () {
    return gulp.src('./scss/style.scss')
        .pipe(sass())
        .on("error", notify.onError({ title: "erro ao compilar", message: "<%= error.message %>" }))
        .pipe(gulp.dest("./css"))
});

gulp.task("sass:watch", function () {
    gulp.watch("./scss/**/*.scss", ['sass']);
});

gulp.task("default", ['sass','sass:watch']);
