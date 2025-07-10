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

// metrics that have not been split out into their own functions yet
process.stdout.write(`
[uses-header-navigation]
function hasHeaderNavigation() {
    const $serviceName = document.querySelector('.govuk-header__service-name')
    const $productName = document.querySelector('.govuk-header__product-name')
    const $nav = document.querySelector('.govuk-header__navigation-list')

    if ($serviceName && $nav) {
        return 'service-name-and-nav'
    } else if ($productName && $nav) {
        return 'product-name-and-nav'
    } else if ($serviceName) {
        return 'service-name-only'
    } else if ($productName) {
        return 'product-name-only'
    } else if ($nav) {
        return 'nav-only'
    } else {
        return 'false'
    }
}

return hasHeaderNavigation()
`)
