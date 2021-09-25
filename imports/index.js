#!/usr/bin/env node

(async function() {
  console.log((await import ('./default.mjs')).default('world'))
  console.log((await import('./named.mjs')).hello('world'))
})()
