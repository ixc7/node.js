
function color (base = 30, str = 'hello world') {
  let result = ''
  for (let i = 0; i < 10; i += 1) {
    result += `\x1b[${base + i}m${str}\x1b[0m\n`
  }
  return result
}

console.clear()
process.stdout.write('\u001b[3J\u001b[1J\n')

for (let i = 0; i < 11; i += 1) {
  process.stdout.write(`\nrange: ${i * 10}\n${color((i * 10))}`)
}

process.stdout.write('\n')
