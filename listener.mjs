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

function makeScreen (char = ' ', border = ' ', padding = 2) {
  let leftPad = ''
  for (let i = 0; i < Math.floor(padding / 2); i += 1) {
    leftPad += ' '
  }

  let topPad = ''
  for (let i = 0; i < Math.floor((process.stdout.rows - (process.stdout.rows - padding)) / 2); i += 1) {
    topPad += '\n'
  }

  let row = `\r${leftPad}${border}`
  for (let i = 0; i < (process.stdout.columns - (padding + 2)); i += 1) {
    row += char
  }
  row += `${border}\n`

  let screen = `${topPad}`
  for (let i = 0; i < (process.stdout.rows - padding); i += 1) {
    screen += row
  }
  return screen
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.input.on('keypress', function (str, key) {
  gotoTop()
  if (str === 's') {
    process.stdout.write(makeScreen('$', '#', 6))
  }
  gotoTop(false)
})

rl.on('SIGINT', () => {
  gotoTop()
  console.log('SIGINT')
  process.exit(1)
})

gotoTop()
