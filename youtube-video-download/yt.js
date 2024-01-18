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


// const ytdl = require('ytdl-core');
// const { spawn } = require('child_process');
// const fs = require("fs")

// const videoUrl = 'https://www.youtube.com/watch?v=8Pb0i8zi1kU';
// const filename = 'downloaded-video.mp4';

// ytdl(videoUrl, {filter:"video" }) // Optional for compatibility
//   .pipe(fs.createWriteStream(__dirname+"/"+filename))
//   .on('finish', () => {
//     console.log('Download complete! Playing video in VLC...');
//     const vlc = spawn('vlc', ['--started-from-file', __dirname+"/"+filename]); // Linux-specific option
//     vlc.on('close', (code) => {
//       console.log('VLC closed with code:', code);
//     });
//   })
//   .on('error', (err) => {
//     console.error('Error downloading video:', err);
//   });

