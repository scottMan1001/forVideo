var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const http = require("http");
const qs = require("querystring");

var service = require("./service/service");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var dataRouter = require("./routes/data");
var fileRouter = require("./routes/files");
var fs = require("fs");
var history = require("connect-history-api-fallback");
var app = express();
// 用以解决 histroy模式访问 404 问题
// app.use(history());
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static(path.join(__dirname, 'dist')));

//设置跨域
app.all("*", function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == "options")
    res.send(200); //让options尝试请求快速结束
  else next();
});
// app.get("/", (req, res) => {
//   debugger;
//   res.send("Hello World");
// });s
// app.use("/users", usersRouter);
app.get("/weixin", (req, res, next) => {
  const qs = require("querystring");
  let search_key = {
    appid: "wx281eb244c69c9b2a",
    secret: "",
    js_code: req.query.code,
    grant_type: "authorization_code",
  };
  search_key = qs.stringify(search_key);
  const body_request = {
    host: "api.weixin.qq.com",
    path: "/sns/jscode2session?" + search_key,
    method: "GET",
  };
  service.getApiFromWx(body_request, function (err, content) {
    if (err) return next(err);
    const { openid } = JSON.parse(content);
    console.log("loginuser sessionkey&openid==>", content);
    res.json({ openid });
  });
});

app.use("/getData", dataRouter);
app.use("/fileVideo", fileRouter);
// 因为是单页应用 所有请求都走/dist/index.html
// app.get('*', function(req, res) {
//   const html = fs.readFileSync(path.resolve(__dirname, '../dist'), 'utf-8')
//   res.send(html)
// })
// app.use("/", indexRouter);

// catch 404 and forward to error handler

app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
