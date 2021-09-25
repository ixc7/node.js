#!/usr/bin/env node

module.exports = (function(a) {
if (!global.validate) {
  return false
} else {
  global.validateSeparate = function (b) {
    return this.validate(b)
  }
  return global.validate(a)
}
})(true)
