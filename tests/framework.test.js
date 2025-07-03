/**
 * @jest-environment jsdom
 */

'use strict'

const fn = require('../metrics/framework')

describe('framework', () => {
  afterEach(() => {
    document.documentElement.innerHTML = ''
    document.body.classList.remove('govuk-template__body')
    document.documentElement.style = ''
  })

  it('returns GOV.UK Frontend if the CSS custom property exists', () => {
    document.documentElement.style.setProperty(
      '--govuk-frontend-version',
      '5.10.2'
    )

    expect(fn()).toBe('GOV.UK Frontend')
  })

  it('returns GOV.UK Frontend if the <body> has a govuk-template class', () => {
    document.body.classList.add('govuk-template__body')

    expect(fn()).toBe('GOV.UK Frontend')
  })

  it('returns GOV.UK Elements if #skiplink-container exists', () => {
    const skipLink = document.createElement('div')
    skipLink.setAttribute('id', 'skiplink-container')

    document.documentElement.appendChild(skipLink)

    expect(fn()).toBe('GOV.UK Template / Frontend Toolkit / Elements')
  })

  it('returns GOV.UK Elements if Template header exists', () => {
    document.body.innerHTML = `
      <header role="banner" id="global-header" class="" data-landmark-index="0">
      <div class="header-wrapper">
        <div class="header-global">
          <div class="header-logo">
            <a href="" title="" id="logo" class="content" data-module="track-click" data-track-category="homeLinkClicked" data-track-action="homeHeader">
              <img src="/govuk_template/assets/images/gov.uk_logotype_crown_invert_trans.png?0.26.0" width="36" height="32" alt=""> GOV.UK
            </a>
          </div>

        </div>

      </div>
    </header>
    `

    expect(fn()).toBe('GOV.UK Template / Frontend Toolkit / Elements')
  })

  it('returns unknown if no indicators are present', () => {
    expect(fn()).toBe('Unknown')
  })

  it('returns both if both frameworks are detected', () => {
    document.documentElement.style.setProperty(
      '--govuk-frontend-version',
      '5.10.2'
    )

    const skipLink = document.createElement('div')
    skipLink.setAttribute('id', 'skiplink-container')

    document.documentElement.appendChild(skipLink)

    expect(fn()).toBe(
      'GOV.UK Frontend + GOV.UK Template / Frontend Toolkit / Elements'
    )
  })
})
