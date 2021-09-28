#!/usr/bin/env node

import https from 'https'
import path from 'path'
import fs from 'fs'
import readline from 'readline'
import open from 'open'
import Progress from 'progress'

// download file from url
const fileName = path.resolve(path.resolve(), 'myVideo.mp4')
const destination = fs.createWriteStream(fileName)
const req = https.request({
  host: 'file-examples-com.github.io',
  path: 'uploads/2017/04/file_example_MP4_640_3MG.mp4'
})

// cancel download on 's' key
readline.emitKeypressEvents(process.stdin)
process.stdin.setRawMode(true)
process.stdin.on('keypress', function (str, key) {
  if (str === 's') {
    console.log('\ndownload cancelled')
    process.stdin.setRawMode(false)
    fs.rmSync(fileName)
    process.exit(1)
  }
})

req.on('response', function (res) {
  const len = parseInt(res.headers['content-length'], 10)

  const bar = new Progress('[:bar] :rate/bps :percent :etas', {
    complete: '#',
    incomplete: '_',
    width: Math.floor(process.stdout.columns / 3),
    total: len
  })

  res.pipe(destination)

  res.on('data', function (chunk) {
    bar.tick(chunk.length)
  })

  res.on('end', async function () {
    console.log('download complete')
    await open(fileName, { wait: true })
    fs.rmSync(fileName)
    process.exit(0)
  })
})

console.log(`download starting
press 's' to cancel`)
const foo = req.end()
