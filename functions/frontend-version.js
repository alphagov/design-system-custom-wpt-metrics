const name = 'frontend-version'

const fn = function () {
  return window
    .getComputedStyle(document.documentElement)
    .getPropertyValue('--govuk-frontend-version')
}

module.exports = { name, fn }
