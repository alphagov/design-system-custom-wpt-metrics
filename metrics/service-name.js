module.exports = function () {
  const selectors = {
    serviceNavigationLink:
      '.govuk-service-navigation__service-name .govuk-service-navigation__link',
    serviceNavigationText:
      '.govuk-service-navigation__service-name .govuk-service-navigation__text',
    headerServiceName: '.govuk-header__service-name',
    headerServiceNameLink: '.govuk-header__link--service-name',
    headerProductName: '.govuk-header__product-name',
    title: 'head title'
  }

  for (const [key, selector] of Object.entries(selectors)) {
    const element = document.querySelector(selector)
    let prefix = ''
    if (element) {
      if (key === 'headerProductName') {
        prefix = 'GOV.UK '
      }
      return prefix + element.textContent.trim()
    }
  }

  return null
}
