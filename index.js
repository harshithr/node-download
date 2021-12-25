const fs = require('fs');
const https = require('https');

class DownloadImage {
  constructor() {}

  download = (url, path, name) => {
    https.get(`${url}`, res => {
      const altPath = `${path}/${name}`;
      console.log(altPath)
      const filePath = fs.createWriteStream(altPath);
      res.pipe(filePath);

      filePath.on('finish', () => {
        filePath.close();
        console.log(`${name} downloaded!`);
      })
    })
  }
}

module.exports = new DownloadImage();