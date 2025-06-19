function getFrontendVersion() {
  return window
    .getComputedStyle(document.documentElement)
    .getPropertyValue('--govuk-frontend-version')
}

if (typeof exports === "object") {
  module.exports = getFrontendVersion
}
