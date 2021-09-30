
function color (base = 30, str = 'hello world') {
  let result = ''
  for (let i = 0; i < 10; i += 1) {
    result += `\x1b[${base + i}m${str}\x1b[0m\n`
  }
  return result
}

console.clear()
process.stdout.write('\u001b[3J\u001b[1J\n')
process.stdout.write(color(0))
process.stdout.write(color(30))
process.stdout.write(`${color(40)}\n`)
