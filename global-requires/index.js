#!/usr/bin/env node

// change to true for process to exit with 1.
const doYouWantThisToFail = false

// define global function,
global.validate = doYouWantThisToFail ? false : function(x) {
  return !!x
}

// then require another script that references it.
const isValid = require('./separate.js')

// return the exit code.
return process.exit(isValid ? 0 : 1)

