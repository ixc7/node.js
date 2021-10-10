#!/usr/bin/env node

/* eslint-disable-next-line camelcase */
import child_process from 'child_process'

const textEdit = (t) => Buffer.from(child_process.execSync(`$(which ${t})`)).toString('utf8')
const fg = x => y => process.stdout.write(`\x1b[38;5;${x}m${y}\x1b[0m\n`)

const { green, red, error } = (() => {
  return {
    green: () => fg(47)(textEdit('micro')),
    red: () => fg(52)(textEdit('micro')),
    error: fg(52)
  }
})()

console.clear()
console.log('write something to print to stdout from your text editor.')

setTimeout(() => {
  try {
    green()
    console.log('now do it again, but in RED this time.')
    setTimeout(() => {
      red()
      process.exit(0)
    }, 3000)
  } catch (e) {
    error(e)
    process.exit(1)
  }
}, 3000)
