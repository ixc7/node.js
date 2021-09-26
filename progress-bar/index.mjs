import https from 'https'
import fs from 'fs'
import progress from 'progress'
import path from 'path';
import open from 'open';

const fileName = path.resolve(path.resolve(), 'myVideo.mp4')
const destination = fs.createWriteStream(fileName)

const req = https.request({
  host: 'jsoncompare.org',
  path: '/LearningContainer/SampleFiles/Video/MP4/Sample-Video-File-For-Testing.mp4'
})

console.log('download starting')

req.on('response', function(res) {

  const len = parseInt(res.headers['content-length'], 10)

  const bar = new progress('[:bar] :rate/bps :percent :etas', {
    complete: '#',
    incomplete: '_',
    width: Math.floor(process.stdout.columns / 3),
    total: len
  })
  
  res.pipe(destination)
  
  res.on('data', function(chunk) {
    bar.tick(chunk.length)
  })

  res.on('end', function() {
    console.log('download complete')
    open(fileName)
    setTimeout(() => {
      fs.rmSync(fileName)
    }, 10000)
  })
})

req.end()
