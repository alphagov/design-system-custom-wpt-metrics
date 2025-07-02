module.exports = function () {
  const $serviceNavigation = document.querySelector('.govuk-service-navigation')
  const $serviceName = document.querySelector(
    '.govuk-service-navigation__service-name'
  )
  const $serviceNavItems = document.querySelector(
    '.govuk-service-navigation__list'
  )

  if ($serviceName && $serviceNavItems) {
    return 'name-and-nav'
  } else if ($serviceName) {
    return 'name-only'
  } else if ($serviceNavItems) {
    return 'nav-only'
  } else if ($serviceNavigation) {
    return 'wrapper-only'
  } else {
    return 'false'
  }
}
