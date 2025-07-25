/**
 * @jest-environment jsdom
 */

'use strict'

const fn = require('../metrics/root-has-rebrand-class')

afterEach(() => {
  document.documentElement.classList.remove('govuk-template--rebranded')
})

describe('frontend-version', () => {
  it('returns true if the body has the `--rebranded` modifier class', () => {
    document.documentElement.classList.add('govuk-template--rebranded')

    expect(fn()).toBe(true)
  })

  it('returns false if the body does not have the `--rebranded` modifier class', () => {
    expect(fn()).toBe(false)
  })
})
