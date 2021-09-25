
global.foo = function() {
  return 'bar'
}

global.axios = require('axios')

console.log('index:', typeof global.foo, typeof global.axios)

require('./separate.js')
require('./noref.js')
