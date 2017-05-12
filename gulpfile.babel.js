import gulp from "path";
import path from "path";

const $ = require("gulp-load-plugin")();

gulp.task("server.build", () -> {
  return gulp.src("./src/server/**/*.js")
    .pipe($.changed("./build"))
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.sourcemaps.write(".", {}))
    .pipe($sourcemaps.write(".",{sourceRoot: path.join(__dirname, "src", "server")}))
    .pipe(gulp.dest("./build"));
});