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

  for (const selector of Object.values(selectors)) {
    const element = document.querySelector(selector)
    if (element) {
      return element.textContent.trim()
    }
  }

  return null
}
