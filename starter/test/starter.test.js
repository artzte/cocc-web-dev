import { readFileSync } from 'node:fs'
import { describe, it, expect, beforeEach } from 'vitest'
import indexHtml from '../index.html?raw'
// Importing the stylesheet adds it to Vitest's watch graph for `npm run test:watch`
import '../src/styles/main.css'

const mainCss = readFileSync('src/styles/main.css', 'utf8')

describe('starter kit sanity check', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = indexHtml
  })

  it('includes core semantic landmarks', () => {
    expect(
      document.querySelector('header'),
      'page has a <header>',
    ).not.toBeNull()
    expect(document.querySelector('main'), 'page has a <main>').not.toBeNull()
    expect(
      document.querySelector('footer'),
      'page has a <footer>',
    ).not.toBeNull()
  })

  it('has a single h1 heading', () => {
    expect(document.querySelectorAll('h1').length, 'page has one <h1>').toBe(1)
  })

  it('links the starter stylesheet and defines cascade layers', () => {
    expect(
      document.querySelector(
        'link[rel="stylesheet"][href="./src/styles/main.css"]',
      ),
      'index.html links ./src/styles/main.css',
    ).not.toBeNull()
    expect(mainCss, 'main.css declares @layer').toContain('@layer')
  })
})
