/**
 * @jest-environment jsdom
 */

'use strict'

const fn = require('../metrics/phase-banner-link')

describe('phase-banner-link', () => {
  afterEach(() => {
    document.documentElement.innerHTML = ''
  })

  it('returns a single link', () => {
    document.documentElement.innerHTML = `
    <div class="govuk-phase-banner">
      <p class="govuk-phase-banner__content">
        <strong class="govuk-tag govuk-phase-banner__content__tag">
          Alpha
        </strong>
        <span class="govuk-phase-banner__text">
          This is a new service. Help us improve it and <a class="govuk-link" href="/feedback">give your feedback by email</a>.
        </span>
      </p>
    </div>`

    expect(fn()).toBe('/feedback')
  })

  it('returns multiple links', () => {
    document.documentElement.innerHTML = `
    <div class="govuk-phase-banner">
      <p class="govuk-phase-banner__content">
        <strong class="govuk-tag govuk-phase-banner__content__tag">
          Alpha
        </strong>
        <span class="govuk-phase-banner__text">
          This is a <a href="/random">new service</a>. Help us improve it and <a class="govuk-link" href="/feedback">give your feedback by email</a>.
        </span>
      </p>
    </div>`

    expect(fn()).toBe('/random, /feedback')
  })

  it('returns false if no links found', () => {
    document.documentElement.innerHTML = `
    <div class="govuk-phase-banner">
      <p class="govuk-phase-banner__content">
        <strong class="govuk-tag govuk-phase-banner__content__tag">
          Alpha
        </strong>
        <span class="govuk-phase-banner__text">
          This is a new service. Help us improve it and give your feedback by email.
        </span>
      </p>
    </div>`

    expect(fn()).toBe('false')
  })
})
