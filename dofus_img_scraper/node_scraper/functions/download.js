var fs = require("fs"),
  request = require("request");

var download = function (uri, filename, callback) {
  request.head(uri, function (err, res, body) {
    console.log("content-type:", res.headers["content-type"]);
    console.log("content-length:", res.headers["content-length"]);

    request(uri).pipe(fs.createWriteStream(filename)).on("close", callback);
  });
};

download(
  "https://static.ankama.com/dofus/www/game/items/200/16362.png",
  "harebourg.png",
  function () {
    console.log("done");
  }
);
