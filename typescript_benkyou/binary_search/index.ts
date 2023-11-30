const sampleCompareFn = (a: number, b: number) => (a > b ? 1 : a < b ? -1 : 0);

export function binarySearchWithLoops(
  list: number[] | [],
  listItem: number,
  compareFn = sampleCompareFn
) {
  let start = 0;
  let end = list.length - 1;

  while (start <= end) {
    let mid = Math.floor((end + start) / 2);
    switch (compareFn(listItem, list[mid])) {
      case -1: {
        end = mid - 1;
        break;
      }
      case 1: {
        start = mid + 1;
        break;
      }

      default: {
        return mid;
      }
    }
  }

  return -1;
}

export function binarySearchWithRecursion(
  list: number[] | [],
  listItem: number,
  compareFn = sampleCompareFn,
  start = 0,
  end = list.length - 1
): number {
  if (start > end) return -1;

  const mid = Math.floor((end + start) / 2);
  const comparison = compareFn(listItem, list[mid]);

  return comparison === -1
    ? binarySearchWithRecursion(list, listItem, compareFn, start, mid - 1)
    : comparison === 1
    ? binarySearchWithRecursion(list, listItem, compareFn, mid + 1, end)
    : mid;
}

export function binarySearchWithTailRecursion(
  list: number[] | [],
  listItem: number,
  compareFn = sampleCompareFn,
  start = 0,
  end = list.length - 1
): number {
  if (start > end) return -1;

  const mid = Math.floor((end + start) / 2);
  const comparison = compareFn(listItem, list[mid]);

  if (comparison === 0) return mid;

  const newBounds = comparison === -1 ? [start, mid - 1] : [mid + 1, end];

  return binarySearchWithTailRecursion(list, listItem, compareFn, ...newBounds);
}

export function binarySearchWithArraySplitting(
  list: number[],
  listItem: number,
  compareFn = sampleCompareFn
): number {
  if (list.length === 0) {
    return -1;
  }
  const middle = Math.floor(list.length / 2);
  const comparison = compareFn(listItem, list[middle]);

  if (comparison === 0) {
    return middle;
  }

  const [left, right] =
    comparison === -1 ? [0, middle - 1] : [middle + 1, list.length];

  const subIndex = binarySearchWithArraySplitting(
    list.slice(left, right),
    listItem,
    compareFn
  );

  return subIndex === -1 ? -1 : left + subIndex;
}

/* two crystal balls problem; find where two crystal balls break and return the index as number
 * jumping by 「sqrt」, so that it doesn't need to walk linearly O(n) vs O(sqrtN)
 */
export function twoCrystals(breaks: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));

  let i = jumpAmount;
  for (; i < breaks.length; i += jumpAmount) {
    if (breaks[i]) {
      break;
    }
  }

  i -= jumpAmount;
  for (let j = 0; j <= jumpAmount && i < breaks.length; ++j, ++i) {
    if (breaks[i]) return i;
  }

  return -1;
}
