module.exports = function () {
  const hasServiceName = !!document.querySelector('.govuk-header__service-name')
  const hasProductName = !!document.querySelector('.govuk-header__product-name')
  const hasNav = !!document.querySelector('.govuk-header__navigation-list')

  switch (true) {
    case hasServiceName && hasNav:
      return 'service-name-and-nav'
    case hasProductName && hasNav:
      return 'product-name-and-nav'
    case hasServiceName:
      return 'service-name-only'
    case hasProductName:
      return 'product-name-only'
    case hasNav:
      return 'nav-only'
    default:
      return 'false'
  }
}
