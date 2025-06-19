function getLogo() {
  const $svg = document.querySelector('.govuk-header__logotype')

  if (!$svg) {
    return 'unknown'
  }

  switch (true) {
    case $svg.querySelector('circle.govuk-logo-dot') !== null:
      return 'middot'
    case $svg.querySelector('path[d^="M33.1,"]') !== null: // v5.10.0+
    case $svg.querySelector('path[d^="M22.6 10.4c-1"]') !== null: // v5.1.0+
      return 'tudor'
    case $svg.querySelector('path[d^="M88.6"]') !== null: // v5.10.0+
    case $svg.querySelector('path[d^="M6.7 12.2c1 "]') !== null: // v5.1.0+
    case $svg.querySelector('path[d^="M25 30.2c3.5"]') !== null: // v4.7.0+
      return 'stedwards'

    default:
      return 'unknown'
  }
}

if (typeof exports === "object") {
  module.exports = getLogo
}
