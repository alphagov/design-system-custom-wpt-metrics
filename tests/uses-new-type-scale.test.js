/**
 * @jest-environment jsdom
 */

'use strict'

const fs = require('fs')

const fn = require('../metrics/uses-new-type-scale')

const fixturesPath = 'tests/fixtures/uses-new-type-scale'
const fixtures = fs
  .readdirSync(fixturesPath)
  .map((filename) => [filename, filename.substring(0, filename.indexOf('.'))])

describe('uses-new-type-scale', () => {
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
