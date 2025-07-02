/**
 * @jest-environment jsdom
 */

'use strict'

const { fn, name } = require('../metrics/framework')

describe('framework', () => {
  afterEach(() => {
    document.documentElement.innerHTML = ''
    document.documentElement.classList.remove('govuk-template')
    document.documentElement.style = ''
  })

  it('has a name of `framework`', () => {
    expect(name).toBe('framework')
  })

  it('returns GOV.UK Frontend if the CSS custom property exists', () => {
    document.documentElement.style.setProperty(
      '--govuk-frontend-version',
      '5.10.2'
    )

    expect(fn()).toBe('GOV.UK Frontend')
  })

  it('returns GOV.UK Frontend if the <body> has a govuk-template class', () => {
    document.documentElement.classList.add('govuk-template')

    expect(fn()).toBe('GOV.UK Frontend')
  })

  it('returns GOV.UK Elements if #skiplink-container exists', () => {
    const skipLink = document.createElement('div')
    skipLink.setAttribute('id', 'skiplink-container')

    document.documentElement.appendChild(skipLink)

    expect(fn()).toBe('GOV.UK Template / Frontend Toolkit / Elements')
  })

  it('returns unknown if no indicators are present', () => {
    expect(fn()).toBe('Unknown')
  })
})
