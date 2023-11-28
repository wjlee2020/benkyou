// O(n^2)
export function insertionSort(list: number[]): number[] {
  for (let i = 1; i < list.length; ++i) {
    const current = list[i];
    let j = i - 1;
    console.log(`j: ${j}`);
    while (j >= 0 && list[j] > current) {
      list[j + 1] = list[j];
      --j;
    }
    list[j + 1] = current;
  }

  console.log(list);
  return list;
}

insertionSort([5, 4, 3, 2, 1]);
