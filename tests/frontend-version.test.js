/**
 * @jest-environment jsdom
 */

'use strict';

const getFrontendVersion = require('../functions/frontend-version');

afterEach(() => {
  document.documentElement.style = '';
});

it('extracts the version of GOV.UK Frontend from the CSS custom property', () => {
  document.documentElement.style.setProperty('--govuk-frontend-version', '5.10.2')

  expect(getFrontendVersion()).toBe('5.10.2')
});

it('returns an empty string if the CSS custom property does not exist', () => {
  expect(getFrontendVersion()).toBe('')
});
