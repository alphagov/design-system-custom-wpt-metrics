module.exports = function () {
  if (
    window
      .getComputedStyle(document.documentElement)
      .getPropertyValue('--govuk-frontend-version')
  ) {
    return 'GOV.UK Frontend'
  }

  if (document.documentElement.classList.contains('govuk-template')) {
    return 'GOV.UK Frontend'
  }

  if (document.getElementById('skiplink-container')) {
    return 'GOV.UK Template / Frontend Toolkit / Elements'
  }

  return 'Unknown'
}
