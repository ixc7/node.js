import readline from 'readline'

function gotoTop (clear = true) {
  const msg = 'press s or ctrl-c'
  if (clear) console.clear()
  readline.cursorTo(
    process.stdin,
    Math.floor((process.stdout.columns / 2) - (msg.length / 2)), 1,
    function () {
      if (clear) process.stdin.write(`${msg}\r`)
    }
  )
}

function makeScreen (char = '.', border = ' ', padding = 6) {
  const leftPad = ' '.repeat(Math.floor(padding / 2))
  const topPad = '\n'.repeat(Math.floor((process.stdout.rows - (process.stdout.rows - padding)) / 2))
  const row = `\r${leftPad}${border}${char.repeat((process.stdout.columns - (padding + 2)))}${border}\n`
  return `${topPad}${row.repeat((process.stdout.rows - padding))}`
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.input.on('keypress', function (str, key) {
  gotoTop()
  if (str === 's') {
    process.stdout.write(makeScreen('$', '╳', 10))
  } else {
    process.stdout.write(makeScreen(str))
  }
  gotoTop(false)
})

rl.on('SIGINT', () => {
  gotoTop()
  console.log('SIGINT')
  process.exit(1)
})

gotoTop()
