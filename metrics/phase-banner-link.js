module.exports = function () {
  const links = [...document.querySelectorAll('.govuk-phase-banner a')]
  const linkMap = links.map((link) => link.getAttribute('href'))
  return linkMap.length ? linkMap.join(', ') : 'false'
}
