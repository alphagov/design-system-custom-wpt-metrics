module.exports = function () {
  const $phaseBanner = document.querySelector('.govuk-phase-banner')

  const hasDsFeedback = !!document.querySelector('.govuk-feedback')
  const hasPhaseBanner = !!$phaseBanner
  const hasGovukFeedback = !!document.querySelector('.gem-c-feedback')
  const keyPhrases = [
    'report a problem',
    'feedback',
    'contact us',
    'is this page useful',
    'help us improve'
  ]

  let hasKeyPhrases = false
  let hasFooterFeedback = false

  const bodyClone = document.body.cloneNode(true)
  bodyClone.querySelectorAll('.govuk-feedback').forEach((el) => el.remove())
  bodyClone.querySelectorAll('.govuk-phase-banner').forEach((el) => el.remove())
  bodyClone.querySelectorAll('.gem-c-feedback').forEach((el) => el.remove())
  bodyClone.querySelectorAll('footer').forEach((el) => el.remove())
  bodyClone.querySelectorAll('header').forEach((el) => el.remove())
  const bodyContent = bodyClone.textContent.toLowerCase()
  if (bodyContent) {
    hasKeyPhrases = keyPhrases.some((phrase) => bodyContent.includes(phrase))
  }

  const footerContent = document
    .querySelector('footer')
    ?.textContent.toLowerCase()

  if (footerContent) {
    hasFooterFeedback = keyPhrases.some((phrase) =>
      footerContent.includes(phrase)
    )
  }

  const tags = []

  if (hasDsFeedback) {
    tags.push('ds-feedback')
  }
  if (hasPhaseBanner) {
    if ($phaseBanner.querySelector('a')) {
      tags.push('phase-banner-support-link')
    } else {
      tags.push('phase-banner-no-link')
    }
  }
  if (hasGovukFeedback) {
    tags.push('govuk-feedback')
  }
  if (hasFooterFeedback) {
    tags.push('footer-feedback')
  }
  if (hasKeyPhrases) {
    tags.push('content-key-phrases')
  }

  if (tags.length > 0) {
    return tags.join(', ')
  }

  return 'false'
}
