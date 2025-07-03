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

[new-type-scale]
/**
 * Iterates over all stylesheets in the document looking for rules with the
 * selector '.govuk-body-xs'. This will only find the rule that is *not* inside
 * a media query.
 *
 * Returns 'true' if ALL instances of '.govuk-body-xs' have a font-size of
 * 0.0875rem which matches the new type scale.
 *
 * Returns 'mixed' if AT LEAST ONE instance of '.govuk-body-xs' has a font-size
 * of 0.0875rem.
 *
 * Returns 'false' if NO instances of '.govuk-body-xs' have a font-size of
 * 0.0875rem.
 *
 * Returns 'unknown' if no instances of '.govuk-body-xs' are found.
 *
 * @returns string 'true'|'false'|'unknown'
 */
function isUsingNewTypeScale() {
    const stylesheets = Array.from(document.styleSheets)

    const $rules = stylesheets.map(stylesheet => {
        try {
            return Array.from(stylesheet.cssRules)
                .find((rule) => rule instanceof CSSStyleRule && rule.selectorText == '.govuk-body-xs')
        } catch (error) {
            return false
        }
    }).filter(rule => rule)

    if ($rules.length === 0) {
        return 'unknown'
    }

    const fontSizes = $rules.map(rule => rule.style["font-size"])

    if (fontSizes.every(rule => rule == '0.875rem')) {
        return 'true'
    } else if (fontSizes.find(rule => rule == '0.875rem')) {
        return 'mixed'
    } else if (fontSizes.length !== 0) {
        return 'false'
    }
}
return isUsingNewTypeScale()
`)
