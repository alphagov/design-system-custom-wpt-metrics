module.exports = function () {
  const hasServiceNavigation = !!document.querySelector(
    '.govuk-service-navigation'
  )
  const hasName = !!document.querySelector(
    '.govuk-service-navigation__service-name'
  )
  const hasNavItems = !!document.querySelector(
    '.govuk-service-navigation__list'
  )

  switch (true) {
    case hasName && hasNavItems:
      return 'name-and-nav'
    case hasName:
      return 'name-only'
    case hasNavItems:
      return 'nav-only'
    case hasServiceNavigation:
      return 'wrapper-only'
    default:
      return 'false'
  }
}
