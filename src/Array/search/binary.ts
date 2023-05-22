type Options<T> = {
  comparator: (a: T, b: T) => number;
  compare?: Compare;
};

export function binarySearch<T>(
  array: T[],
  value: T,
  { comparator, compare = 'first' }: Options<T>,
): number {
  let left = 0,
    right = array.length - 1,
    result = -1;

  if (compare === 'first') {
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const compareResult = comparator(value, array[mid]);

      if (compareResult === 0) {
        return mid;
      }
      if (compareResult > 0) {
        left = mid + 1;
      }
      if (compareResult < 0) {
        right = mid - 1;
      }
    }
  }
  if (compare === 'min') {
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const compareResult = comparator(value, array[mid]);

      if (compareResult === 0) {
        result = mid;
        right = mid - 1;
      }
      if (compareResult > 0) {
        left = mid + 1;
      }
      if (compareResult < 0) {
        right = mid - 1;
      }
    }
  }
  if (compare === 'max') {
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const compareResult = comparator(value, array[mid]);

      if (compareResult === 0) {
        result = mid;
        left = mid + 1;
      }
      if (compareResult > 0) {
        left = mid + 1;
      }
      if (compareResult < 0) {
        right = mid - 1;
      }
    }
  }

  return result;
}

type Compare = 'min' | 'max' | 'first';
