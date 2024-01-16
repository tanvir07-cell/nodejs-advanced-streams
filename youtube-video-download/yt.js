const fs = require("fs");
const through2 = require("through2");
const ytdl = require('ytdl-core');

process.stdin.pipe(through2(write, end));

async function write(buf, enc, next) {
  const videoId = buf.toString().trim()
  const getVideoInfo = await ytdl.getInfo(videoId);
  const title = getVideoInfo.videoDetails.title;
  process.stdout.write(`Downloading ${title}... 💫\n`);

  let format = ytdl.chooseFormat(getVideoInfo.formats, {quality:"highest"});

  // // Check for audio in the selected format, if not, try a different format
  // if (!format || !format.hasAudio) {
  //   console.warn('Selected format does not have audio. Trying a different format.');
  //   format = ytdl.chooseFormat(getVideoInfo.formats, { quality: 'highest' });
  // }

  const outputStream = fs.createWriteStream(`${title}.${format.container}`);
  ytdl(videoId, { format: format })
    .pipe(outputStream)
    .on('finish', () => {
      process.stdout.write('Download is finished ✔!\n');
      next();
    })
    .on('error', (error) => {
      console.error('Error:', error);
      next();
    });
}

function end(done) {
  console.log("done");
  done();
}
