// O(n^2)
export function insertionSort(list: number[]): number[] {
  for (let i = 1; i < list.length; ++i) {
    const current = list[i];
    let j = i - 1;
    while (j >= 0 && list[j] > current) {
      list[j + 1] = list[j];
      --j;
    }
    list[j + 1] = current;
  }

  return list;
}

// O(n^2)
export function bubbleSort(list: number[]): number[] {
  for (let i = 0; i < list.length; ++i) {
    for (let j = 0; j < list.length - 1 - i; ++j) {
      if (list[j] > list[j + 1]) {
        const tmp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = tmp;
      }
    }
  }

  return list;
}
