/**
 * @jest-environment jsdom
 */

'use strict';

const { fn, name } = require('../metrics/frontend-version')

afterEach(() => {
  document.documentElement.style = '';
});

describe('frontend-version', () => {
  it('has a name of frontend-version', () => {
    expect(name).toBe('frontend-version')
  })

  it('extracts the version of GOV.UK Frontend from the CSS custom property', () => {
    document.documentElement.style.setProperty('--govuk-frontend-version', '5.10.2')
  
    expect(fn()).toBe('5.10.2')
  })
  
  it('returns an empty string if the CSS custom property does not exist', () => {
    expect(fn()).toBe('')
  })
})
