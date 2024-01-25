import { describe, test, expect } from 'vitest';
import baseJSON from '../base.json';
import applicationJSON from '../application.json';
import applicationLegacyJSON from '../applicationLegacy.json';
import libraryJSON from '../library.json';

describe('Configuration snapshot', () => {
  test('base.json', () => {
    expect(baseJSON).toMatchSnapshot();
  });
  test('application.json', () => {
    expect(applicationJSON).toMatchSnapshot();
  });
  test('applicationLegacy.json', () => {
    expect(applicationLegacyJSON).toMatchSnapshot();
  });
  test('library.json', () => {
    expect(libraryJSON).toMatchSnapshot();
  });
});
