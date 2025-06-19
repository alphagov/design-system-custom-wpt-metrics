function getLogo() {
   const $svg = document.querySelector('.govuk-header__logotype')
    if (!$svg) {
        return 'unknown'
    }

    /** NEEDS WORK – test against all versions of header SVG **/
    switch (true) {
        case $svg.querySelector('circle.govuk-logo-dot') !== null:
            return 'middot'
        case $svg.querySelector('path[d^="M13.4"]') !== null:
        case $svg.querySelector('path[d^="M25"]') !== null:
            return 'stedwards'
        case $svg.querySelector('path[d^="M22.6"]') !== null:
            return 'tudor'
        default:
            return 'unknown'
    }
}

if (typeof exports === "object") {
  module.exports = getLogo
}
