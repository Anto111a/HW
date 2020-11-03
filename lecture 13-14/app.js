const express = require('express');
const fs = require("fs");
const archiver = require('archiver');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));

const srcFolderPath = path.join(__dirname, '/public/img');
const destFolderPath = path.join(__dirname, '/img.zip');

const createZip = (source, out) => {
  
  const archive = archiver('zip', { zlib: { level: 9 } });
  const createZipStream = fs.createWriteStream(out);

  return new Promise((resolve, reject) => {
    archive
      .directory(source, false)
      .on('error', err => reject(err))
      .pipe(createZipStream)
    ;
    createZipStream.on('close', () => resolve(destFolderPath));
    archive.finalize();
  });
}

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/download', (_, res) => {
  createZip(srcFolderPath, destFolderPath)
  .then(resolve => res.sendFile(resolve))
  .catch(err => console.log(err))
})

app.listen(port, (err) => {
  console.log(err);
})
