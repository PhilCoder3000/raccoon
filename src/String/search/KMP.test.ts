import { KMPSearch } from './KMP';

describe('KMP search', () => {
  test('should return empty array if no results', () => {
    expect(KMPSearch('abc', 'def')).toEqual([]);
  });

  test('should return empty array if no results', () => {
    const text = 'ABABDABACDABABCABAB';
    const pattern = 'ABABCABAB';
    expect(KMPSearch(text, pattern)).toEqual([10]);
  });
});
