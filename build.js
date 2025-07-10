const fs = require('fs')
const path = require('path')

process.stdout.write(`; DO NOT EDIT - This is automatically generated\n`)
process.stdout.write(
  `; See github.com/alphagov/design-system-custom-wpt-metrics\n\n`
)

for (const filename of fs.readdirSync('metrics')) {
  const fn = require(`./metrics/${filename}`)
  const name = path.parse(filename).name
  process.stdout.write(`[${name}]\n`)
  process.stdout.write(`return (${fn.toString()})()`)
  process.stdout.write(`\n\n`)
}
