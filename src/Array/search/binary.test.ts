import { binarySearch } from './binary';

function comparator(a: number, b: number) {
  return a - b;
}

describe('Binary search', () => {
  test('Binary search works', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(binarySearch<number>(array, 3, { comparator })).toBe(2);
    expect(binarySearch<number>(array, 7, { comparator })).toBe(6);
  });

  test('Binary search first element', () => {
    const array = [1, 1, 2, 2, 2, 2, 2, 3, 3];
    expect(binarySearch<number>(array, 2, { comparator })).toBe(4);
  });

  test('Binary search min element', () => {
    const array = [1, 1, 2, 2, 2, 2, 2, 3, 3];
    expect(binarySearch<number>(array, 2, { comparator, compare: 'min' })).toBe(
      2,
    );
  });

  test('Binary search max element', () => {
    const array = [1, 1, 2, 2, 2, 2, 2, 3, 3];
    expect(binarySearch<number>(array, 2, { comparator, compare: 'max' })).toBe(
      6,
    );
  });
});
