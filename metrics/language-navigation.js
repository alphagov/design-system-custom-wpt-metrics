module.exports = function () {
  if (!document.querySelector('.govuk-language-navigation')) {
    return 'false'
  }

  const tags = []

  if (
    document.querySelector(
      '.govuk-service-navigation .govuk-language-navigation'
    )
  ) {
    tags.push('service-nav')
  }
  if (
    document.querySelector(
      '.govuk-service-navigation .govuk-service-navigation__inlining-container .govuk-language-navigation'
    )
  ) {
    tags.push('service-nav-inline')
  }
  if (
    document.querySelector(
      ':is(h1,h2,h3,h4,h5,h6) + .govuk-language-navigation'
    )
  ) {
    tags.push('after-heading')
  }

  if (tags.length > 0) {
    return tags.join(', ')
  }

  return 'anywhere-in-page'
}
