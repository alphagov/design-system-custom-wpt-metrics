const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

// Add header comment so users know this is a generated file
const date = new Date().toLocaleString('en-GB')
const gitSha = execSync('git rev-parse HEAD').toString().trim()

process.stdout.write(`
; DO NOT EDIT - This is automatically generated
; See github.com/alphagov/design-system-custom-wpt-metrics
; Generated on ${date} (${gitSha})

`)

// Output the metrics
for (const filename of fs.readdirSync('metrics')) {
  const fn = require(`./metrics/${filename}`)
  const name = path.parse(filename).name
  process.stdout.write(`[${name}]\n`)
  process.stdout.write(`return (${fn.toString()})()`)
  process.stdout.write(`\n\n`)
}
