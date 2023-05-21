import { binarySearch } from './binary'

function comparator(a: number, b: number){
  return a - b
}

describe('Binary search', () => {
  test('Binary search works', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    expect(binarySearch<number>(array, 5, { comparator })).toBe(4)
  })
})