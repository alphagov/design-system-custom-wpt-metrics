/**
 * @jest-environment jsdom
 */

'use strict'

const fn = require('../metrics/uses-service-navigation')

describe('uses-service-navigation', () => {
  afterEach(() => {
    document.documentElement.innerHTML = ''
  })

  it('returns "name-and-nav" if service navigation contains both', () => {
    document.documentElement.innerHTML = `
      <section aria-label="Service information" class="govuk-service-navigation" data-module="govuk-service-navigation">
        <div class="govuk-width-container">
          <div class="govuk-service-navigation__container">
            <span class="govuk-service-navigation__service-name">
              <a href="#/" class="govuk-service-navigation__link">
                Apply for a juggling license
              </a>
            </span>

            <nav aria-label="Menu" class="govuk-service-navigation__wrapper">
              <button type="button" class="govuk-service-navigation__toggle govuk-js-service-navigation-toggle" aria-controls="navigation" hidden>
                Menu
              </button>

              <ul class="govuk-service-navigation__list" id="navigation" >
                <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/1">Navigation item 1</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>`

    expect(fn()).toBe('name-and-nav')
  })

  it('returns "name-only" if service navigation contains only a name', () => {
    document.documentElement.innerHTML = `
      <section aria-label="Service information" class="govuk-service-navigation" data-module="govuk-service-navigation">
        <div class="govuk-width-container">
          <div class="govuk-service-navigation__container">
            <span class="govuk-service-navigation__service-name">
              <a href="#/" class="govuk-service-navigation__link">
                Apply for a juggling license
              </a>
            </span>
          </div>
        </div>
      </section>`

    expect(fn()).toBe('name-only')
  })

  it('returns "nav-only" if service navigation contains only a name', () => {
    document.documentElement.innerHTML = `
      <section aria-label="Service information" class="govuk-service-navigation" data-module="govuk-service-navigation">
        <div class="govuk-width-container">
          <div class="govuk-service-navigation__container">
            <nav aria-label="Menu" class="govuk-service-navigation__wrapper">
              <button type="button" class="govuk-service-navigation__toggle govuk-js-service-navigation-toggle" aria-controls="navigation" hidden>
                Menu
              </button>

              <ul class="govuk-service-navigation__list" id="navigation" >
                <li class="govuk-service-navigation__item">
                  <a class="govuk-service-navigation__link" href="#/1">Navigation item 1</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>`

    expect(fn()).toBe('nav-only')
  })

  it('returns "wrapper-only" if service navigation contains only the wrapper', () => {
    document.documentElement.innerHTML = `
      <section aria-label="Service information" class="govuk-service-navigation" data-module="govuk-service-navigation">
        <div class="govuk-width-container">
          <div class="govuk-service-navigation__container">
            <!-- maybe they're using slots? 🤷 -->
          </div>
        </div>
      </section>`

    expect(fn()).toBe('wrapper-only')
  })

  it('returns "false" if not using service navigation', () => {
    expect(fn()).toBe('false')
  })
})
