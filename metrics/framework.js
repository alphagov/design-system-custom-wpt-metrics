module.exports = function () {
  const usesFrontend = [
    window
      .getComputedStyle(document.documentElement)
      .getPropertyValue('--govuk-frontend-version'),
    document.body.classList.contains('govuk-template__body')
  ].some((result) => !!result)

  const usesLegacy = [
    document.getElementById('skiplink-container'),
    document.querySelector('.header-wrapper .header-global .header-logo')
  ].some((result) => !!result)

  switch (true) {
    case usesFrontend && usesLegacy:
      return 'GOV.UK Frontend + GOV.UK Template / Frontend Toolkit / Elements'
    case usesFrontend:
      return 'GOV.UK Frontend'
    case usesLegacy:
      return 'GOV.UK Template / Frontend Toolkit / Elements'
    default:
      return 'Unknown'
  }
}
