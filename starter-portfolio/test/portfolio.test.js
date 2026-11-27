import { describe, it, expect, beforeEach } from 'vitest'
import indexHtml from '../index.html?raw'

describe('portfolio sanity check', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = indexHtml
  })

  it('includes core semantic landmarks and a single h1', () => {
    expect(
      document.querySelector('header'),
      'portfolio has a <header>',
    ).not.toBeNull()
    expect(
      document.querySelector('main'),
      'portfolio has a <main>',
    ).not.toBeNull()
    expect(
      document.querySelector('footer'),
      'portfolio has a <footer>',
    ).not.toBeNull()
    expect(
      document.querySelectorAll('h1').length,
      'portfolio has one <h1>',
    ).toBe(1)
  })

  it('links to weekly projects and the final project', () => {
    expect(
      document.querySelector('a[href="../week1/"]'),
      'portfolio links to ../week1/',
    ).not.toBeNull()
    expect(
      document.querySelector('a[href="../final/"]'),
      'portfolio links to ../final/',
    ).not.toBeNull()
  })
})
