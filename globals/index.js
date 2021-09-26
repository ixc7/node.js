#!/usr/bin/env node

// exit if value is not truthy or falsy.
const acceptableArgs = ['true', 'false']

if (!process.argv[2] || acceptableArgs.indexOf(process.argv[2].toLowerCase()) === -1) {
  console.log(`value must either be "true" or "false", not "${process.argv[2]}"`)
  process.exit(1)
}

if (JSON.parse(process.argv[2].toLowerCase())) {
// define global, then call from separate file.
  global.validate = function (x) {
    return !!x
  }
  const isValid = require('./separate.js')
  process.exit(isValid ? 0 : 1)
} else {
  process.exit(1)
}
