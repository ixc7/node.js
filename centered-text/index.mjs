import readline from 'readline'

const input = process.argv.slice(2).join(' ')
const msg = input.length < 1 ? 'hello world' : input
const x = Math.floor((process.stdout.columns / 2) - (msg.length / 2))
const y = Math.floor((process.stdout.rows / 2) - 1)

console.clear()

readline.cursorTo(process.stdout, x, y, function () {
  process.stdin.write(msg)
  readline.cursorTo(process.stdout, 0, process.stdout.rows)
})
