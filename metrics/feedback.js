module.exports = function () {
  const hasPhaseBanner = !!document.querySelector('.govuk-phase-banner')
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

  const mainContent = document.querySelector('main')?.textContent.toLowerCase()
  if (mainContent) {
    hasKeyPhrases = keyPhrases.some((phrase) => mainContent.includes(phrase))
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

  if (hasPhaseBanner) {
    tags.push('phase-banner')
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
