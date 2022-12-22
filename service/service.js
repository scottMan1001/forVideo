const https = require("https");

const getApiFromWx = (body_request, fn) => {
  const req = https.request(body_request, (res) => {
    var content = "";
    res.setEncoding("utf-8");
    res.on("data", (chunk) => {
      content += chunk;
    });
    res.on("error", (err) => {
      console.log(err);
    });
    res.on("end", () => {
      return fn(null, content);
    });
  });

  req.end();
};
module.exports = { getApiFromWx };
