/* eslint-disable */

import readline from 'readline'

function gotoTop (clear = true) {
  if (clear) console.clear()
  readline.cursorTo(process.stdout, 0, 0)
  if (clear) process.stdout.write('\npress s or ctrl-c\n')
}

function makeScreen (char = '$', border = ':', padding = 7) {
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
    process.stdout.write(makeScreen())
  }
  gotoTop(false)
})

rl.on('SIGINT', () => {
  gotoTop()
  console.log('SIGINT')
  process.exit(1)
})

gotoTop()
