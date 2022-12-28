var express = require("express");
var path = require("path");
const multer = require("multer");
const fs = require("fs");
var router = express.Router();
const upload = multer({ dest: "../public/video" });
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  // console.log("GET VIDEO LIST TIME: ", Date.now());
  next();
});
// define the home page route
router.get("/daily", function (req, res, next) {
  const videoPath = path.join(__dirname, "../", "/public/video/daily/");
  const files = fs.readdirSync(videoPath);
  const fileName = videoPath + files[0];
  return res.sendFile(fileName);
});

router.post(
  "/fileUpload",
  upload.any(),
  function timeLog(req, res, next) {
    console.log("fileUpload route begin", Date.now());
    next();
  },
  (req, res, next) => {
    // console.log(req.files[0]);
    console.log("fileUpload  start===>");
    // 先判断daily文件夹中是否有文件，有的话，移动到histroy文件夹
    const videoPath = path.join(__dirname, "../", "/public/video/daily/");
    const files = fs.readdirSync(videoPath);
    if (files.length > 0) {
      var sourceFile = path.join(videoPath, files[0]);
      var destPath = path.join(
        videoPath,
        "../",
        "history",
        Date.now() + ".mp4"
      );
      fs.renameSync(sourceFile, destPath);
    }

    const fileUrl = videoPath + req.files[0].originalname; //文件名

    fs.readFile(req.files[0].path, (err, res) => {
      if (err) {
        console.log(err);
        return;
      }
      fs.writeFile(fileUrl, res, (err) => {
        //文件写入
        if (err) {
          console.log(err);
        } else {
          // 文件上传成功，respones给客户端
          response = {
            message: "File uploaded successfully",
            filename: req.files[0].originalname,
          };
        }
        console.log("/public/" + response.filename);
      });
    });
    res.end();
  }
);

//history views api get mp4list uploaded
router.get("/history", function (req, res) {
  const videoPath = path.join(__dirname, "../", "/public/video/history/");
  const fileList = fs.readdirSync(videoPath).map((item) => {
    item = videoPath + item;
    return item;
  });
  res.send(fileList.slice(-2));
});

router.get("/history/:filename", function (req, res, next) {
  const videoPath = path.join(__dirname, "../", "/public/video/history/");

  const fileName = videoPath + req.params.filename + ".mp4";
  return res.sendFile(fileName);
});
module.exports = router;
