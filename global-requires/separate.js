
module.exports = (function(a) {
if (!global.validate) {
  return false
  // process.exit(1)
} else {
  global.validateSeparate = function (b) {
    return this.validate(b)
  }
  return global.validate(a)
}
})(true)
