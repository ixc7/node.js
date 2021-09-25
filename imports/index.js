#!/usr/bin/env node

(async function() {
  console.log((await import ('./hello.mjs')).default('world'))
})()
