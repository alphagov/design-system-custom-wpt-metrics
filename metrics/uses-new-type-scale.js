/**
 * Iterates over all stylesheets in the document looking for rules with the
 * selector '.govuk-body-xs'. This will only find the rule that is *not* inside
 * a media query.
 *
 * Returns 'true' if ALL instances of '.govuk-body-xs' have a font-size of
 * 0.875rem which matches the new type scale.
 *
 * Returns 'mixed' if AT LEAST ONE instance of '.govuk-body-xs' has a font-size
 * of 0.875rem.
 *
 * Returns 'false' if NO instances of '.govuk-body-xs' have a font-size of
 * 0.875rem.
 *
 * Returns 'unknown' if no instances of '.govuk-body-xs' are found.
 *
 * @returns string 'true'|'false'|'mixed'|'unknown'
 */
module.exports = function () {
  const stylesheets = Array.from(document.styleSheets)

  const $rules = stylesheets
    .map((stylesheet) => {
      try {
        return Array.from(stylesheet.cssRules).find((rule) => {
          return (
            rule instanceof window.CSSStyleRule &&
            rule.selectorText === '.govuk-body-xs'
          )
        })
      } catch (error) {
        return false
      }
    })
    .filter((rule) => rule)

  if ($rules.length === 0) {
    return 'unknown'
  }

  const fontSizes = $rules.map((rule) => rule.style['font-size'])

  switch (true) {
    case fontSizes.every((rule) => rule === '0.875rem'):
      return 'true'
    case fontSizes.some((rule) => rule === '0.875rem'):
      return 'mixed'
    case fontSizes.length !== 0:
      return 'false'
  }
}
