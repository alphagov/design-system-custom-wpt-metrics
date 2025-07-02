module.exports = function () {
  return window
    .getComputedStyle(document.documentElement)
    .getPropertyValue('--govuk-frontend-version')
}
