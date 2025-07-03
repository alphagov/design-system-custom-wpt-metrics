/**
 * @jest-environment jsdom
 */

'use strict'

const fs = require('fs')

const fn = require('../metrics/logo')

const fixturesPath = 'tests/fixtures/logo'
const fixtures = fs
  .readdirSync('tests/fixtures/logo')
  .map((filename) => [filename, filename.substring(0, filename.indexOf('-'))])

describe('logo', () => {
  afterEach(() => {
    document.documentElement.innerHTML = ''
  })

  it.each(fixtures)('%s should be detected as %s', (filename, expected) => {
    document.documentElement.innerHTML = fs.readFileSync(
      `${fixturesPath}/${filename}`
    )

    expect(fn()).toBe(expected)
  })
})
