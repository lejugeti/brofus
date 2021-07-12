const fs = require("fs");
const fetch = require("node-fetch");

const url = "https://static.ankama.com/dofus/www/game/items/200/16362.png";

async function download() {
  const response = await fetch(url);
  const buffer = await response.buffer();
  fs.writeFile(`./image.jpg`, buffer, () =>
    console.log("finished downloading!")
  );
}

module.exports = download;
