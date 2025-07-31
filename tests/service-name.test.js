/**
 * @jest-environment jsdom
 */

'use strict'

const fs = require('fs')

const fn = require('../metrics/service-name')
const fixturesPath = 'tests/fixtures/service-name'
const fixtures = fs.readdirSync(fixturesPath).map((filename) => {
  if (filename === 'unknown.html') {
    return [filename, null]
  }
  if (filename === 'header-product-name.html') {
    return [filename, 'Product name']
  }
  return [filename, 'Service name']
})

describe('service-name', () => {
  afterEach(() => {
    document.documentElement.innerHTML = ''
  })

  it.each(fixtures)('%s should return %s', (filename, expected) => {
    document.documentElement.innerHTML = fs.readFileSync(
      `${fixturesPath}/${filename}`
    )

    expect(fn()).toBe(expected)
  })
})
