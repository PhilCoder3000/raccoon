type Options<T> = {
  comparator: (a: T, b: T) => number;
  compare?: Compare
};

export function binarySearch<T>(
  array: T[],
  value: T,
  { comparator }: Options<T>,
): number {
  let left = 0,
    right = array.length - 1;
  

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] === value) {
      return mid;
    }
    const compareResult = comparator(array[mid], value);
    if (compareResult > 0) {
      left = mid;
    } else {
      right = mid;
    }
  }
  return -1;
}

type Compare = 'min' | 'max' | 'first';