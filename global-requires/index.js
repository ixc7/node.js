#!/usr/bin/env node

// check if value is truthy or falsy,
const acceptableArgs = ['true', 'false']

// and exit with error if it is not.
if (!process.argv[2] || acceptableArgs.indexOf(process.argv[2].toLowerCase()) === -1) {
  process.exit(1)
} 

// if value is truthy,
if (!!JSON.parse(process.argv[2].toLowerCase())) {

  // define global function,
  global.validate = function(x) {
    return !!x
  }

  // then require another script that references it.
  const isValid = require('./separate.js')

  // exit with success.
  process.exit(isValid ? 0 : 1)

// exit with error if value is falsy.
} else {
  process.exit(1)  
}

