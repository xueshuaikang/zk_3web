let gulp=require("gulp");

let sass=require("gulp-sass");

let server=require("gulp-webserver");

gulp.task("sass",()=>{
    return gulp.src("./src/sass/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./src/style"))
})

gulp.task("server",()=>{
    return gulp.src("./src")
    .pipe(server({
        port:9090,
        proxies:[
            {
                source:"/users/conmon",
                target:"http://localhost:3000/users/conmon"
            }
        ]
    }))
})

gulp.task("watch",()=>{
    return gulp.watch("./src/sass/*.scss",gulp.series("sass"))
})

gulp.task("dev",gulp.series("sass","server","watch"))