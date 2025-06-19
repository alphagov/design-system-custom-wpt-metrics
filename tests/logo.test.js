/**
 * @jest-environment jsdom
 */

'use strict';

const fs = require('fs')

const getLogo = require('../functions/logo')

const fixturesPath = 'tests/fixtures/logo'
const fixtures = fs.readdirSync('tests/fixtures/logo').map(
  (filename) => [filename, filename.substring(0, filename.indexOf('-'))]
)

describe('getLogo', () => {
  afterEach(() => {
    document.documentElement.innerHTML = ''
  })

  it.each(fixtures)('%s should be detected as %s', (filename, expected) => {
    document.documentElement.innerHTML = fs.readFileSync(`${fixturesPath}/${filename}`)

    expect(getLogo()).toBe(expected)
  })
})
