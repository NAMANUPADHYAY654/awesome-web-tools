import { expect, test, describe, beforeEach, vi } from 'vitest';
import { initTheme } from '../src/js/theme.js';

describe('Theme Management', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
    
    // Mock matchMedia
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: false, // Default to light mode for the test
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });

    document.body.innerHTML = '<button id="theme-toggle"><span id="theme-icon"></span></button>';
  });

  test('initTheme defaults to light mode if no preference and no dark system preference', () => {
    initTheme();
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });

  test('clicking theme-toggle switches between dark and light', () => {
    initTheme(); // sets to light
    const toggleBtn = document.getElementById('theme-toggle');
    
    toggleBtn.click();
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');

    toggleBtn.click();
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    expect(localStorage.getItem('theme')).toBe('light');
  });
});
