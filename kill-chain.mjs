// https://nodejs.org/api/child_process.html#child_process_child_process_fork_modulepath_args_options

import readline from 'readline'
import { fork } from 'child_process'

const filename = new URL(import.meta.url).pathname
const num = process.argv[2] || 0

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', () => {
  console.log(`killed: ${num}`)
  process.exit(0)
})

setTimeout(() => {
  const child = fork(filename, [parseInt(num) + 1])
  
  child.on('close', () => {
    console.log(`exit: ${num}`)
    process.exit(0)
  })
  rl.close()
}, 100)

console.log(`current: ${num}`)
