import readline from 'readline'

const msg = 'hello world'
const x = Math.floor((process.stdout.columns / 2) - msg.length)
const y = Math.floor((process.stdout.rows / 2) - 1)

console.clear()

readline.cursorTo(process.stdout, x, y, function() {
  process.stdin.write(msg)
  readline.cursorTo(process.stdout, 0, process.stdout.rows)
})
