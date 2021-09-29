#!/usr/bin/env node

(async function () {
  // export default
  console.log((await import('./default.mjs')).default('world'))

  // export { ... }
  console.log((await import('./named.mjs')).hello('world'))

  // core modules
  if (
    (await import('util'))
      .types.isStringObject('any string here...')
  ) {
    console.log('hello world')
  }
})()
