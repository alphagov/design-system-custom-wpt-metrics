/**
 * @jest-environment jsdom
 */

'use strict'

const fs = require('fs')

const fn = require('../metrics/feedback')

const fixturesPath = 'tests/fixtures/feedback'
const fixtures = fs
  .readdirSync(fixturesPath)
  .map((filename) => [filename, filename.substring(0, filename.indexOf('.'))])

describe('feedback', () => {
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
