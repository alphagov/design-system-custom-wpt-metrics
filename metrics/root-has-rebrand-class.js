const name = 'root-has-rebrand-class'

const fn = function () {
  return document.documentElement.classList.contains('govuk-template--rebranded')
}

module.exports = { name, fn }
